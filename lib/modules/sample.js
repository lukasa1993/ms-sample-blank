import metalogger from 'metalogger';

const log = metalogger();

export default function sample() {

  console.error('\n');
  log.alert('Hello, this ms is not supposed to run this is start point for every ms copy it edit it then run it enjoy');
  console.error('\n');
  process.exit(0);
}
