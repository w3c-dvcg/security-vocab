const {
  documentLoaderFactory,
  contexts,
} = require('@transmute/jsonld-document-loader');

const didKeyEd25519 = require('@transmute/did-key-ed25519');
const didKeyWebCrypto = require('@transmute/did-key-web-crypto');

const documentLoader = documentLoaderFactory.pluginFactory
  .build({
    contexts: {
      ...contexts.W3C_Decentralized_Identifiers,
      ...contexts.W3ID_Security_Vocabulary,
    },
  })
  .addResolver({
    'did:key:z6': {
      resolve: async uri => {
        const {didDocument} = await didKeyEd25519.driver.resolve(uri, {
          accept: 'application/did+ld+json',
        });
        return didDocument;
      },
    },
    'did:key:zA': {
      resolve: async uri => {
        const {didDocument} = await didKeyWebCrypto.driver.resolve(uri, {
          accept: 'application/did+json',
        });
        return didDocument;
      },
    },
  })
  .buildDocumentLoader();

module.exports = {documentLoader};
