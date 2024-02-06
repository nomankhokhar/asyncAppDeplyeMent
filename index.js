const data = require("./template.json");

async function sendMultipleApiRequests() {
  const apiEndpoint = "your/api/endpoint";

  async function sendRequest(name, type, version) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Application is Deployed with the name ${name}`);
      }, 5000);
    });
  }

  for (let i = 0; i < data.types[0].packages.length; i++) {
    let onePack = data.types[0].packages[i];
    try {
      const response = await sendRequest(
        onePack.name,
        onePack.packageType,
        onePack.version
      );
      console.log(response);
    } catch (error) {
      console.error(`Error in request ${i}:`, error);
    }
  }

  console.log("All API requests completed");
}

sendMultipleApiRequests();
