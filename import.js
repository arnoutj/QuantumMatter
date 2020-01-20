/***
 * Create records
 */
function createRecords(file) {
  file.forEach(function(r) {
    var record = transformRecord(r);

    if(alreadyExists(record)){
      console.error(`Record '${record.title}' (DOI: ${record.doi}) already exists.`);
      return;
    }

    if(!!record) {
      createDatoCMSRecord(record);
    }else{
      failedRecords.push(record);
      console.error(`Failed to transform ${record}.`);
    }
  });
}

function createRecordFromDOI(doi) {
  let data = new Cite(doi).format('data');

  if(!data) {
    console.error(`No DOI data found for ${doi}`);
    return;
  }

  data = JSON.parse(data);
  createRecords(data);
}

/***
 * Transform item from JSON to record
 */
function transformRecord(record) {
  const type = getRecordType(record);

  switch(type) {
    case 'publication':
      return createPublication(record);
    case 'member':
      return createMember(record);
    default:
      return false;
  }
}

/***
 * Match item from JSON to DatoCMS itemType
 */
function getRecordType(inputRecord) {
  if(!inputRecord) {
    return false;
  }
  if(Object.keys(inputRecord).includes('name')) {
    return 'member';
  }
  if(Object.keys(inputRecord).includes('year') || Object.keys(inputRecord).includes('author')) {
    return 'publication';
  }
  // Default temporarily to publication
  return 'publication';
}

/***
 * Create Publication record
 */
function createPublication(inputRecord) {
  const itemType = itemTypes.find(i => i.apiKey == 'publication');
  return {
    itemType: itemType.id,
    title: inputRecord['title'],
    author: inputRecord['author'].map(author => `${author.family}, ${author.given}`).join(),
    year: inputRecord['issued']['date-parts'][0][0],
    journal: inputRecord['container-title'],
    doi: inputRecord['DOI'],
    publisher: inputRecord['publisher'],
    url: inputRecord['URL'],
    thesis: false,
    thumbnail: null,
    lab: null
  };
}

/***
 * Create Member record
 */
function createMember(inputRecord) {
  return {
    itemType: 'member',
    name: inputRecord.name
  };
}

/***
 * Create actual record in DatoCMS
 */
function createDatoCMSRecord(record) {
  client.items.create(record)
    .then(createdRecord => {
      console.log(`Created '${createdRecord.title}' (DOI: ${record.doi}).`);
    })
    .catch(error => {
      console.error(`Could not create '${record.title}' (DOI: ${record.doi}: ${error})`);
      console.error(record);
    });
}

/***
 * Check if record already exists in DatoCMS
 */
function alreadyExists(record) {
  if(!existingPublications) {
    return false;
  }
  return !!existingPublications.find(r => r.doi.toLowerCase() === record.doi.toLowerCase());
}

/***
 * Get records for specific model
 */
function getRecordsForType(type) {
  return new Promise((resolve, reject) => {
    client.items.all({ 'filter[type]': type }, { allPages: true })
      .then(records => {
        resolve(records)
      }),
      (error) => reject(error)
    });
}

const Cite = require('citation-js');
const SiteClient = require('datocms-client').SiteClient;
const client = new SiteClient('77f20cb6665eb5fbd0e7ca17037cb4');
let existingPublications = [];
let itemTypes = [];

// Init
client.itemTypes.all()
  .then((types) => {
    itemTypes = types;
    getRecordsForType('publication')
      .then((publications) => {
        existingPublications = publications;
        const doi = createRecordFromDOI('10.1103/PhysRevX.7.041041');
      });
    });

// Get models
// client.itemTypes.all()
//   .then((models) => console.log(models.map(model => model.apiKey)));

// Get records
// client.items.all({}, { allPages: true })
//   .then((records) => {
//     console.log(`Retrieved records from DatoCMS`);
//     console.log(records);
//     existingRecords = records;
//   });