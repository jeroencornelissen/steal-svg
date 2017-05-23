const xmlTagRegex = new RegExp(/<\?xml(.*?)?>/, 'gi');
const nsRegex = new RegExp(/xmlns(.*?)"(.*?)"/, 'gi');
const lineBreakRegex = new RegExp(/(\r\n|\n|\r)/, 'g');

exports.translate = function (load) {
  load.metadata.format = 'es6';
  load.source = load.source.replace(xmlTagRegex, '');
  load.source = load.source.replace(nsRegex, '');
  load.source = load.source.replace(lineBreakRegex, '');
  load.source = 'export default \'' + load.source + '\';';
};
