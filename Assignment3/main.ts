import { PigController } from './PigController';
import { Pig } from './PigModel';

var pc = new PigController();

document.getElementById('add')!.addEventListener('click', function () {
  var p = new Pig('Pork chop', 'Porkbelly', 20, 20, 'Funny');
  pc.add(p);
});
