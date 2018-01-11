#pragma strict
var startMarker: Transform;
var endMarker;


var speed = 1.0;
private var startTime: float;
private var journeyLength: float;

function Start () {
	endMarker = Vector3(0, 43.46, 0);
	startTime = Time.time;
	
	journeyLength = Vector3.Distance(startMarker.position, endMarker);
	
	yield WaitForSeconds (7);
	Destroy(gameObject);
}

function Update () {
	var distCovered = (Time.time - startTime) * speed;
	
	var fracJourney = distCovered / journeyLength;
	
	transform.position = Vector3.Lerp(startMarker.position, endMarker, fracJourney);
}