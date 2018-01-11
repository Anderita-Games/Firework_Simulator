#pragma strict
var Speed = .1;

function Update() {
	//Computer Version
	if (Input.GetKey ("right")) {
		transform.Rotate(Vector3.up * Speed * 2);
	}
	if (Input.GetKey ("left")) {
		transform.Rotate(Vector3.up * (Speed * -2));
	}
	if (Input.GetKey ("up")) {
		transform.Translate(Vector3.forward * (Speed * .1));
	}
	if (Input.GetKey ("down")) {
		transform.Translate(Vector3.forward * (Speed * -.1));
	}
	if (Input.GetKey ("space")) {
		transform.Translate(Vector3.up * (Speed * 1));
	}
	//Phone Version
	transform.Rotate(Vector3.left * Input.acceleration.z * 4);
	
}

