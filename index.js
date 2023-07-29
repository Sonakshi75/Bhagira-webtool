let ejs = require('ejs');
let express = require('express');
let bodyParser = require('body-parser');
const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const https = require('https');
const fetch = require('node-fetch');
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));
var classes = ["animal", "bird", "Insect", "Amphibian", "Reptiles", "Chick", "cub", "Hacthlings", "Face", "legs", "Feet", "wings", "tail", "Talons", "claws", "Beak", "Snout", "Tongue", "next", "burrows", "Dung", "droppings", "Horns", "Antenna", "Hump", "Dewlap", "Egg", "Anthill", "Combs", "Carcass", "Bones", "Feather"];
var count = 0;
// let Plantnetscore1="";
// let Plantnetscore2="";
// let Plantnetscore3="";
// let PlantnetScientificName1="";
// let PlantnetScientificName2="";
// let PlantnetScientificName3="";
// let PlantIdprob1="";
// let PlantIdprob2="";
// let PlantIdprob3="";
// let PlantIdplant_name1="";
// let PlantIdplant_name2="";
// let PlantIdplant_name3="";
// function checkboxes(){
//     var inputElems = document.getElementsByClassName("CheckBoxStep-1");
//     for (var i=0; i<inputElems.length; i++) {
//     if (inputElems[i].type === "checkbox" && inputElems[i].checked === true){
//         count++;
//         console.log(count);
//     }
// }
// }
// function ShowingStep1() {
//   var x = document.getElementById("HiddenEle-1");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
app.get("/", function(req, res) {
  res.render("index", {
    classes: classes,
    count: count
  });
});
app.get("/flora", function(req, res) {
  res.render("flora", {
    classes: classes,
    count: count
  });
});
app.get("/flora-after-api", function(req, res) {
  res.render("flora-after-api", {
    classes: classes,
    count: count,
    Plantnetscore1: Plantnetscore1,
    PlantnetScientificName1: PlantnetScientificName1,
    Plantnetscore2: Plantnetscore2,
    PlantnetScientificName2: PlantnetScientificName2,
    Plantnetscore3: Plantnetscore3,
    PlantnetScientificName3: PlantnetScientificName3,
    PlantIdplant_name1: PlantIdplant_name1,
    PlantIdprob1: PlantIdprob1,
    PlantIdplant_name2: PlantIdplant_name2,
    PlantIdprob2: PlantIdprob2,
    PlantIdplant_name3: PlantIdplant_name3,
    PlantIdprob3: PlantIdprob3
  });
});
app.get("/fauna", function(req, res) {
  res.render("fauna", {
    classes: classes,
    count: count
  });
});

app.get("/fauna-after-api", function(req, res) {
  res.render("fauna-after-api", {
    classes: classes,
    count: count,
    faunaName1:faunaName1,
    faunaIdentifier1:faunaIdentifier1,
    faunaName2:faunaName2,
    faunaIdentifier2:faunaIdentifier2,
    faunaName3:faunaName3,
    faunaIdentifier3:faunaIdentifier3
  });
});

app.get("/flora-after-api-details",function(req,res){
  res.render("flora-after-api-details",{
    classes:classes,
    count:count,
    eol_flora_name1:eol_flora_name1,
    eol_flora_identifier1:eol_flora_identifier1,
    eol_synonym1_1:eol_synonym1_1,
    eol_synonym1_2:eol_synonym1_2,
    taxon_eol_canonical_form1:taxon_eol_canonical_form1,
    taxon_eol_nameaccto1:taxon_eol_nameaccto1,
    taxon_eol_source1:taxon_eol_source1,
    taxon_eol_rank1:taxon_eol_rank1,
    taxon_eol_canonical_form2:taxon_eol_canonical_form2,
    taxon_eol_nameaccto2:taxon_eol_nameaccto2,
    taxon_eol_source2:taxon_eol_source2,
    taxon_eol_rank2:taxon_eol_rank2,
    eol_flora_name2:eol_flora_name2,
    eol_flora_identifier2:eol_flora_identifier2,
    eol_synonym2_1:eol2_synonym2_1,
    eol_synonym2_2:eol2_synonym2_2,
    taxon_eol2_canonical_form1:taxon_eol2_canonical_form1,
    taxon_eol2_nameaccto1:taxon_eol2_nameaccto1,
    taxon_eol2_source1:taxon_eol2_source1,
    taxon_eol2_rank1:taxon_eol2_rank1,
    taxon_eol2_canonical_form2:taxon_eol2_canonical_form2,
    taxon_eol2_nameaccto2:taxon_eol2_nameaccto2,
    taxon_eol2_source2:taxon_eol2_source2,
    taxon_eol2_rank2:taxon_eol2_rank2,
    eol_flora_name3:eol_flora_name1,
    eol_flora_identifier3:eol_flora_identifier1,
    eol_synonym3_1:eol_synonym3_1,
    eol_synonym3_2:eol_synonym3_2,
    taxon_eol3_canonical_form1:taxon_eol3_canonical_form1,
    taxon_eol3_nameaccto1:taxon_eol3_nameaccto1,
    taxon_eol3_source1:taxon_eol3_source1,
    taxon_eol3_rank1:taxon_eol3_rank1,
    taxon_eol3_canonical_form2:taxon_eol3_canonical_form2,
    taxon_eol3_nameaccto2:taxon_eol3_nameaccto2,
    taxon_eol3_source2:taxon_eol3_source2,
    taxon_eol3_rank2:taxon_eol3_rank2,
    gbif_count:gbif_count,
    gbif_limit:gbif_limit,
    gbif_scientificName1:gbif_scientificName1,
    gbif_taxon_key1:gbif_taxon_key1,
    gbif_country1:gbif_country1,
    gbif_dataSetName1:gbif_dataSetName1,
    gbif_family1:gbif_family1,
    gbif_genericName1:gbif_genericName1,
    gbif_genus1:gbif_genus1,
    gbif_identifiedBy1:gbif_identifiedBy1,
    gbif_kingdom1:gbif_kingdom1,
    gbif_taxonRank1:gbif_taxonRank1,
    gbif_species1:gbif_species1,
    gbif_stateProvince1:gbif_stateProvince1,
    gbif_scientificName2:gbif_scientificName2,
    gbif_taxon_key2:gbif_taxon_key2,
    gbif_country2:gbif_country2,
    gbif_dataSetName2:gbif_dataSetName2,
    gbif_family2:gbif_family2,
    gbif_genericName2:gbif_genericName2,
    gbif_genus2:gbif_genus2,
    gbif_identifiedBy2:gbif_identifiedBy2,
    gbif_kingdom2:gbif_kingdom2,
    gbif_taxonRank2:gbif_taxonRank2,
    gbif_species2:gbif_species2,
    gbif_stateProvince2:gbif_stateProvince2,
  })
})

//FLAURA
app.post("/flora-after-api", function(req, res) {
  'use strict';

  const fs = require('fs'); // File System | Node.js
  const axios = require('axios'); // HTTP client
  const FormData = require('form-data'); // Readable "multipart/form-data" streams


  const image1 = 'public/images/image-4.jpg';

  (async () => {
    let form = new FormData();

    form.append('organs', 'flower');
    form.append('images', fs.createReadStream(image1));

    try {
      const {
        status,
        data
      } = await axios.post(
        'https://my-api.plantnet.org/v2/identify/all?api-key=2b100RuRZQah4XxT238YQorky',
        form, {
          headers: form.getHeaders()
        }
      );

      const files = ['public/images/image-4.jpg'];

      const base64files = files.map(file => fs.readFileSync(file, 'base64'));

      const data2 = {
        api_key: "hBxJPtzWRI2xDcKsSQcLltg56KWUcYRrAwcsANirDvl67VXmLH",
        images: base64files,
        modifiers: ["crops_fast", "similar_images"],
        plant_language: "en",
        /* plant details info: https://github.com/flowerchecker/Plant-id-API/wiki/Plant-details */
        plant_details: ["common_names",
          "url",
          "name_authority",
          "wiki_description",
          "taxonomy",
          "synonyms"
        ]
      };

      console.log('status', status); // should be: 200
      console.log('data', require('util').inspect(data, false, null, true));
      const Plantnetscore1 = data.results[0].score;
      const PlantnetScientificName1 = data.results[0].species.scientificNameWithoutAuthor;
      // console.log(score1);
      // console.log(ScientificName1);
      // res.write("<p>1. Score:" + score1 + "</p>");
      // res.write("<p>  Scientific Name:" + ScientificName1 + "</p>");
      const Plantnetscore2 = data.results[1].score;
      const PlantnetScientificName2 = data.results[1].species.scientificNameWithoutAuthor;
      // console.log(score2);
      // console.log(ScientificName2);
      // res.write("<p>2. Score:" + score2 + "</p>");
      // res.write("<p>   Scientific Name:" + ScientificName2 + "</p>");
      const Plantnetscore3 = data.results[2].score;
      const PlantnetScientificName3 = data.results[2].species.scientificNameWithoutAuthor;
      // console.log(score3);
      // console.log(ScientificName3);
      console.log(Plantnetscore1);
      console.log(PlantnetScientificName1);
      console.log(Plantnetscore2);
      console.log(PlantnetScientificName2);
      console.log(Plantnetscore3);
      console.log(PlantnetScientificName3);
      axios.post('https://api.plant.id/v2/identify', data2).then(respond => {
        const PlantIdplant_name1 = respond.data.suggestions[0].plant_name;
        const PlantIdprob1 = respond.data.suggestions[0].probability;
        const PlantIdplant_name2 = respond.data.suggestions[1].plant_name;
        const PlantIdprob2 = respond.data.suggestions[1].probability;
        const PlantIdplant_name3 = respond.data.suggestions[2].plant_name;
        const PlantIdprob3 = respond.data.suggestions[2].probability;
        console.log(respond.data);
        console.log(PlantIdplant_name1);
        console.log(PlantIdprob1);
        console.log(PlantIdplant_name2);
        console.log(PlantIdprob2);
        console.log(PlantIdplant_name3);
        console.log(PlantIdprob3);
        res.render("flora-after-api", {
          classes: classes,
          count: count,
          Plantnetscore1: Plantnetscore1,
          PlantnetScientificName1: PlantnetScientificName1,
          Plantnetscore2: Plantnetscore2,
          PlantnetScientificName2: PlantnetScientificName2,
          Plantnetscore3: Plantnetscore3,
          PlantnetScientificName3: PlantnetScientificName3,
          PlantIdplant_name1: PlantIdplant_name1,
          PlantIdprob1: PlantIdprob1,
          PlantIdplant_name2: PlantIdplant_name2,
          PlantIdprob2: PlantIdprob2,
          PlantIdplant_name3: PlantIdplant_name3,
          PlantIdprob3: PlantIdprob3
        });
      }).catch(error => {
        console.error('Error: ', error)
      })
    } catch (error) {
      console.error('error', error);
    }
    // var args = {
    //   parameters: {
    //     'observation_photo[observation_id]': '1055033', //id for a record
    //     // 'file': req.files.file
    //   },
    //   headers: {
    //     'Authorization': 'Bearer ' + token
    //   }
    // }

  //   client.post('https://inaturalist.org/observation_photos', args, function(data, response) {
  //     console.log(response.body);
  //     res.send(data);
  //   });
  })();
});



app.post("/fauna-after-api",function(req,res){
  'use strict';
  const param1= "Ursus americanus";
  // https://srm-bagheera-app.herokuapp.com/v1/search?names=Panthera%20leo&country=india&limit=2
  // const url =' https://srm-bagheera-app.herokuapp.com/v1/search?names=Giraffa&country=india&limit=3';
  // const url =' https://srm-bagheera-app.herokuapp.com/v1/search?names=Panthera%20leo&country=US&limit=2'
  const url =' https://srm-bagheera-app.herokuapp.com/v1/search?names=Ursus%20americanus&names=Pinus%20conorta&names=Aix%20sponsa&country=US&limit=2'
  async function faunaAPI(){
    const response  = await fetch(url);
    const data = await response.json();
    const {scientific_name , identifier} = data;
    console.log(data.eol_client_res.all_pages[0].scientific_name);
    console.log(data.eol_client_res.all_pages[0].identifier);
    console.log(data.eol_client_res.all_pages[1].scientific_name);
    console.log(data.eol_client_res.all_pages[1].identifier);
    console.log(data.eol_client_res.all_pages[2].scientific_name);
    console.log(data.eol_client_res.all_pages[2].identifier);
    // console.log(data.all_occurrences.results.species);
    const faunaName1 = data.eol_client_res.all_pages[0].scientific_name;
    const faunaIdentifier1 = data.eol_client_res.all_pages[0].identifier;
    const faunaName2 = data.eol_client_res.all_pages[1].scientific_name;
    const faunaIdentifier2 = data.eol_client_res.all_pages[1].identifier;
    const faunaName3 = data.eol_client_res.all_pages[2].scientific_name;
    const faunaIdentifier3 = data.eol_client_res.all_pages[2].identifier;
    console.log(faunaName1);
    console.log(faunaIdentifier1);
    console.log(faunaName2);
    console.log(faunaIdentifier2);
    console.log(faunaName3);
    console.log(faunaIdentifier3);
    res.render("fauna-after-api",{
      classes:classes,
      count:count,
      faunaName1:faunaName1,
      faunaIdentifier1:faunaIdentifier1,
      faunaName2:faunaName2,
      faunaIdentifier2:faunaIdentifier2,
      faunaName3:faunaName3,
      faunaIdentifier3:faunaIdentifier3
    });
    res.send();
    // console.log(data);
  }
  faunaAPI();
});

app.post("/flora-after-api-details",function(req,res){
  'use strict'
  const name=" ";
  const url="https://srm-bagheera-app.herokuapp.com/v1/search?names=Cleome%20houtteana&country=US&limit=2";
  async function FloraDetails(){
    const response = await fetch(url);
    const data = await response.json();


    const eol_flora_name1 = data.eol_client_res.all_pages[0].scientific_name;
    const eol_flora_identifier1 = data.eol_client_res.all_pages[0].identifier;
    const eol_synonym1_1 = data.eol_client_res.all_pages[0].synonyms[0].synonym;
    const eol_synonym1_2 = data.eol_client_res.all_pages[0].synonyms[1].synonym;
    const taxon_eol_canonical_form1 = data.eol_client_res.all_pages[0].taxon_concepts[0].canonicalForm;
    const taxon_eol_nameaccto1 = data.eol_client_res.all_pages[0].taxon_concepts[0].nameAccordingTo;
    const taxon_eol_source1 = data.eol_client_res.all_pages[0].taxon_concepts[0].sourceIdentifier;
    const taxon_eol_rank1 = data.eol_client_res.all_pages[0].taxon_concepts[0].taxonRank;
    const taxon_eol_canonical_form2 = data.eol_client_res.all_pages[0].taxon_concepts[1].canonicalForm;
    const taxon_eol_nameaccto2 = data.eol_client_res.all_pages[0].taxon_concepts[1].nameAccordingTo;
    const taxon_eol_source2 = data.eol_client_res.all_pages[0].taxon_concepts[1].sourceIdentifier;
    const taxon_eol_rank2 = data.eol_client_res.all_pages[0].taxon_concepts[1].taxonRank;

    const eol_flora_name2 = data.eol_client_res.all_pages[1].scientific_name;
    const eol_flora_identifier2 = data.eol_client_res.all_pages[1].identifier;
    const eol_synonym2_1 = data.eol_client_res.all_pages[1].synonyms[0].synonym;
    const eol_synonym2_2 = data.eol_client_res.all_pages[1].synonyms[1].synonym;
    const taxon_eol2_canonical_form1 = data.eol_client_res.all_pages[1].taxon_concepts[0].canonicalForm;
    const taxon_eol2_nameaccto1 = data.eol_client_res.all_pages[1].taxon_concepts[0].nameAccordingTo;
    const taxon_eol2_source1 = data.eol_client_res.all_pages[1].taxon_concepts[0].sourceIdentifier;
    const taxon_eol2_rank1 = data.eol_client_res.all_pages[1].taxon_concepts[0].taxonRank;
    const taxon_eol2_canonical_form2 = data.eol_client_res.all_pages[1].taxon_concepts[1].canonicalForm;
    const taxon_eol2_nameaccto2 = data.eol_client_res.all_pages[1].taxon_concepts[1].nameAccordingTo;
    const taxon_eol2_source2 = data.eol_client_res.all_pages[1].taxon_concepts[1].sourceIdentifier;
    const taxon_eol2_rank2 = data.eol_client_res.all_pages[1].taxon_concepts[1].taxonRank;

    const eol_flora_name3 = data.eol_client_res.all_pages[2].scientific_name;
    const eol_flora_identifier3 = data.eol_client_res.all_pages[2].identifier;
    const eol_synonym3_1 = data.eol_client_res.all_pages[2].synonyms[0].synonym;
    const eol_synonym3_2 = data.eol_client_res.all_pages[2].synonyms[1].synonym;
    const taxon_eol3_canonical_form1 = data.eol_client_res.all_pages[2].taxon_concepts[0].canonicalForm;
    const taxon_eol3_nameaccto1 = data.eol_client_res.all_pages[2].taxon_concepts[0].nameAccordingTo;
    const taxon_eol3_source1 = data.eol_client_res.all_pages[2].taxon_concepts[0].sourceIdentifier;
    const taxon_eol3_rank1 = data.eol_client_res.all_pages[2].taxon_concepts[0].taxonRank;
    const taxon_eol3_canonical_form2 = data.eol_client_res.all_pages[2].taxon_concepts[1].canonicalForm;
    const taxon_eol3_nameaccto2 = data.eol_client_res.all_pages[2].taxon_concepts[1].nameAccordingTo;
    const taxon_eol3_source2 = data.eol_client_res.all_pages[2].taxon_concepts[1].sourceIdentifier;
    const taxon_eol3_rank2 = data.eol_client_res.all_pages[2].taxon_concepts[1].taxonRank;

    const gbif_count = data.gbif_client_res.all_occurrences[0].count;
    const gbif_limit = data.gbif_client_res.all_occurrences[0].limit;

    const gbif_scientificName1=data.gbif_client_res.all_occurrences[0].results[0].acceptedScientificName;
    const gbif_taxon_key1 = data.gbif_client_res.all_occurrences[0].results[0].acceptedTaxonKey;
    const gbif_country1 = data.gbif_client_res.all_occurrences[0].results[0].country;
    const gbif_dataSetName1 = data.gbif_client_res.all_occurrences[0].results[0].datasetName;
    const gbif_family1 = data.gbif_client_res.all_occurrences[0].results[0].family;
    const gbif_genericName1 = data.gbif_client_res.all_occurrences[0].results[0].genericName;
    const gbif_genus1 = data.gbif_client_res.all_occurrences[0].results[0].genus;
    const gbif_identifiedBy1 = data.gbif_client_res.all_occurrences[0].results[0].identifiedBy;
    const gbif_kingdom1 = data.gbif_client_res.all_occurrences[0].results[0].kingdom;
    const gbif_taxonRank1 = data.gbif_client_res.all_occurrences[0].results[0].taxonRank;
    const gbif_species1 = data.gbif_client_res.all_occurrences[0].results[0].species;
    const gbif_stateProvince1 = data.gbif_client_res.all_occurrences[0].results[0].stateProvince;

    const gbif_scientificName2=data.gbif_client_res.all_occurrences[0].results[1].acceptedScientificName;
    const gbif_taxon_key2 = data.gbif_client_res.all_occurrences[0].results[1].acceptedTaxonKey;
    const gbif_country2 = data.gbif_client_res.all_occurrences[0].results[1].country;
    const gbif_dataSetName2 = data.gbif_client_res.all_occurrences[0].results[1].datasetName;
    const gbif_family2 = data.gbif_client_res.all_occurrences[0].results[1].family;
    const gbif_genericName2 = data.gbif_client_res.all_occurrences[0].results[1].genericName;
    const gbif_genus2 = data.gbif_client_res.all_occurrences[0].results[1].genus;
    const gbif_identifiedBy2 = data.gbif_client_res.all_occurrences[0].results[1].identifiedBy;
    const gbif_kingdom2 = data.gbif_client_res.all_occurrences[0].results[1].kingdom;
    const gbif_taxonRank2 = data.gbif_client_res.all_occurrences[0].results[1].taxonRank;
    const gbif_species2 = data.gbif_client_res.all_occurrences[0].results[1].species;
    const gbif_stateProvince2 = data.gbif_client_res.all_occurrences[0].results[1].stateProvince;


    // res.write("<h1>Here are the details acc to EOL</h1>");
    // res.write("<h1>First</h1>");
    // res.write("<p>"+eol_flora_name1+"</p>");
    // res.write("<p>"+eol_flora_identifier1+"</p>");
    // res.write("<p>Synonyms: "+eol_synonym1_1 +" , "+eol_synonym1_2+"</p>");
    // res.write("<h1>Taxon Details 1</h1>");
    // res.write("<p>"+taxon_eol_canonical_form1+"</p>");
    // res.write("<p>"+taxon_eol_nameaccto1+"</p>");
    // res.write("<p>"+taxon_eol_source1+"</p>");
    // res.write("<p>"+taxon_eol_rank1+"</p>");
    // res.write("<h1>Taxon Details 2</h1>");
    // res.write("<p>"+taxon_eol_canonical_form2+"</p>");
    // res.write("<p>"+taxon_eol_nameaccto2+"</p>");
    // res.write("<p>"+taxon_eol_source2+"</p>");
    // res.write("<p>"+taxon_eol_rank2+"</p>");
    //
    // res.write("<h1>Second</h1>");
    // res.write("<p>"+eol_flora_name2+"</p>");
    // res.write("<p>"+eol_flora_identifier2+"</p>");
    // res.write("<h1>Taxon Details 1</h1>");
    // res.write("<p>"+taxon_eol2_canonical_form1+"</p>");
    // res.write("<p>"+taxon_eol2_nameaccto1+"</p>");
    // res.write("<p>"+taxon_eol2_source1+"</p>");
    // res.write("<p>"+taxon_eol2_rank1+"</p>");
    // res.write("<h1>Taxon Details 2</h1>");
    // res.write("<p>"+taxon_eol2_canonical_form2+"</p>");
    // res.write("<p>"+taxon_eol2_nameaccto2+"</p>");
    // res.write("<p>"+taxon_eol2_source2+"</p>");
    // res.write("<p>"+taxon_eol2_rank2+"</p>");
    //
    // res.write("<h1>Third</h1>");
    // res.write("<p>"+eol_flora_name3+"</p>");
    // res.write("<p>"+eol_flora_identifier3+"</p>");
    // res.write("<h1>Taxon Details 1</h1>");
    // res.write("<p>"+taxon_eol3_canonical_form1+"</p>");
    // res.write("<p>"+taxon_eol3_nameaccto1+"</p>");
    // res.write("<p>"+taxon_eol3_source1+"</p>");
    // res.write("<p>"+taxon_eol3_rank1+"</p>");
    // res.write("<h1>Taxon Details 2</h1>");
    // res.write("<p>"+taxon_eol3_canonical_form2+"</p>");
    // res.write("<p>"+taxon_eol3_nameaccto2+"</p>");
    // res.write("<p>"+taxon_eol3_source2+"</p>");
    // res.write("<p>"+taxon_eol3_rank2+"</p>");
    //
    // res.write("<h1>Here are the details acc to GBIF</h1>");
    // res.write("<p>Count:"+gbif_count+"</p>");
    // res.write("<p>Limit:"+gbif_limit+"</p>");
    //
    // res.write("<h1>First</h1>");
    // res.write("<p>"+gbif_taxon_key1+"</p>");
    // res.write("<p>"+gbif_family1+"</p>");
    // res.write("<p>"+gbif_dataSetName1+"</p>");
    // res.write("<p>"+gbif_genericName1+"</p>");
    // res.write("<p>"+gbif_identifiedBy1+"</p>");
    // res.write("<p>"+gbif_kingdom1+"</p>");
    // res.write("<p>"+gbif_taxonRank1+"</p>");
    // res.write("<p>"+gbif_species1+"</p>");
    // res.write("<p>"+gbif_stateProvince1+"</p>");
    //
    // res.write("<h1>Second</h1>");
    // res.write("<p>"+gbif_taxon_key2+"</p>");
    // res.write("<p>"+gbif_family2+"</p>");
    // res.write("<p>"+gbif_dataSetName2+"</p>");
    // res.write("<p>"+gbif_genericName2+"</p>");
    // res.write("<p>"+gbif_identifiedBy2+"</p>");
    // res.write("<p>"+gbif_kingdom2+"</p>");
    // res.write("<p>"+gbif_taxonRank2+"</p>");
    // res.write("<p>"+gbif_species2+"</p>");
    // res.write("<p>"+gbif_stateProvince2+"</p>");
    //
    // res.send();
    res.render("flora-after-api-details",{
      classes:classes,
      count:count,
      eol_flora_name1:eol_flora_name1,
      eol_flora_identifier1:eol_flora_identifier1,
      eol_synonym1_1:eol_synonym1_1,
      eol_synonym1_2:eol_synonym1_2,
      taxon_eol_canonical_form1:taxon_eol_canonical_form1,
      taxon_eol_nameaccto1:taxon_eol_nameaccto1,
      taxon_eol_source1:taxon_eol_source1,
      taxon_eol_rank1:taxon_eol_rank1,
      taxon_eol_canonical_form2:taxon_eol_canonical_form2,
      taxon_eol_nameaccto2:taxon_eol_nameaccto2,
      taxon_eol_source2:taxon_eol_source2,
      taxon_eol_rank2:taxon_eol_rank2,
      eol_flora_name2:eol_flora_name2,
      eol_flora_identifier2:eol_flora_identifier2,
      eol_synonym2_1:eol_synonym2_1,
      eol_synonym2_2:eol_synonym2_2,
      taxon_eol2_canonical_form1:taxon_eol2_canonical_form1,
      taxon_eol2_nameaccto1:taxon_eol2_nameaccto1,
      taxon_eol2_source1:taxon_eol2_source1,
      taxon_eol2_rank1:taxon_eol2_rank1,
      taxon_eol2_canonical_form2:taxon_eol2_canonical_form2,
      taxon_eol2_nameaccto2:taxon_eol2_nameaccto2,
      taxon_eol2_source2:taxon_eol2_source2,
      taxon_eol2_rank2:taxon_eol2_rank2,
      eol_flora_name3:eol_flora_name1,
      eol_flora_identifier3:eol_flora_identifier1,
      eol_synonym3_1:eol_synonym3_1,
      eol_synonym3_2:eol_synonym3_2,
      taxon_eol3_canonical_form1:taxon_eol3_canonical_form1,
      taxon_eol3_nameaccto1:taxon_eol3_nameaccto1,
      taxon_eol3_source1:taxon_eol3_source1,
      taxon_eol3_rank1:taxon_eol3_rank1,
      taxon_eol3_canonical_form2:taxon_eol3_canonical_form2,
      taxon_eol3_nameaccto2:taxon_eol3_nameaccto2,
      taxon_eol3_source2:taxon_eol3_source2,
      taxon_eol3_rank2:taxon_eol3_rank2,
      gbif_count:gbif_count,
      gbif_limit:gbif_limit,
      gbif_scientificName1:gbif_scientificName1,
      gbif_taxon_key1:gbif_taxon_key1,
      gbif_country1:gbif_country1,
      gbif_dataSetName1:gbif_dataSetName1,
      gbif_family1:gbif_family1,
      gbif_genericName1:gbif_genericName1,
      gbif_genus1:gbif_genus1,
      gbif_identifiedBy1:gbif_identifiedBy1,
      gbif_kingdom1:gbif_kingdom1,
      gbif_taxonRank1:gbif_taxonRank1,
      gbif_species1:gbif_species1,
      gbif_stateProvince1:gbif_stateProvince1,
      gbif_scientificName2:gbif_scientificName2,
      gbif_taxon_key2:gbif_taxon_key2,
      gbif_country2:gbif_country2,
      gbif_dataSetName2:gbif_dataSetName2,
      gbif_family2:gbif_family2,
      gbif_genericName2:gbif_genericName2,
      gbif_genus2:gbif_genus2,
      gbif_identifiedBy2:gbif_identifiedBy2,
      gbif_kingdom2:gbif_kingdom2,
      gbif_taxonRank2:gbif_taxonRank2,
      gbif_species2:gbif_species2,
      gbif_stateProvince2:gbif_stateProvince2
    });
  }
  FloraDetails();
})

app.listen(3000, function() {
  console.log("Server is running on port 3000");
})
