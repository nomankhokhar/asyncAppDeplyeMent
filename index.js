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



function isEmptyString(str: string): boolean {
	return str.trim() === ""
}

interface Data {
	[key: string]: string | Data
}

function getKeysWithEmptyValues(obj: Data): string[] {
	const keysWithEmptyValues: string[] = []

	function traverse(obj: Data) {
		for (const key in obj) {
			if (typeof obj[key] === "object" && obj[key] !== null) {
				traverse(obj[key] as Data)
			} else if (isEmptyString(obj[key] as string)) {
				keysWithEmptyValues.push(key)
			}
		}
	}

	traverse(obj)
	return keysWithEmptyValues
}