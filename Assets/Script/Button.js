#pragma strict
var Firework: GameObject;

function Start () {

}

function Button (){
		Instantiate(Firework, new Vector3(0, 0, 0), Quaternion.identity);
}