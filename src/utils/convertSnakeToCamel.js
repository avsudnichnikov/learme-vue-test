export default function convertSnakeToCamel(str){
  function replaceAndUpCase(match) {
    return match.toUpperCase().replace('-', '');
  }
  return str.replace(
    /-([a-z])/g,
    replaceAndUpCase
  );
}

