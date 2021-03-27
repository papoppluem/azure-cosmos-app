const config = {};

config.host = process.env.HOST || "https://papopcosmos.documents.azure.com:443/";
config.authKey =
  process.env.AUTH_KEY || "1yeuLOlvWokObNzrpTnxD6TAD21qfegg77yxFJxGntkxIgEdzz6bu7xHFnXQuEbbjwUEQ9zVkg8KU7i1mIBtag==";
config.databaseId = "ToDoList";
config.containerId = "Items";

if (config.host.includes("https://localhost:")) {
  console.log("Local environment detected");
  console.log("WARNING: Disabled checking of self-signed certs. Do not have this code in production.");
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  console.log(`Go to http://localhost:${process.env.PORT || '3000'} to try the sample.`);
}

module.exports = config;