

// basic functionalities
// CONNECT to BROKER ADDRESS
$(document).ready(function() {
client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
client.on("connect", function() {
console.log("Successfully connected");
})

client.on("message", function(topic, payload) {
console.log("Received { topic:" + topic + "; payload: " + payload + " }");
switch (topic) {
case "alobar/temperature":
$('#alonzobarlas').val(payload);
break;
case "amabel":
$('#amabel').val(payload);
break;
case "rosedaine":
$('#rosedaine').val(payload);
break;
case "pasores/temperature":
$('#pasores').val(payload);
break;
case "sample":
$('#sample').val(payload);
break;
case "renzyclaire":
$('#renzyclaire').val(payload);
break;
case "Luz-Ian/Temp":
$('#Luz-Ian').val(payload);
break;
case "louie/cindy/Temp":
$('#louie').val(payload);
break;
case "diansin/gabatan/temp":
$('#diansin').val(payload);
break;
case "preAnn/temp":
$('#preAnn').val(payload);
break;
case "MaryAira":
$('#MaryAira').val(payload);
break;
case "tychu/temp":
$('#tychu').val(payload);
break;
}
})

client.subscribe({
'alobar/temperature': { qos: 0 },
'amabel': { qos: 0 },
'rosedaine': { qos: 0 },
'pasores/temperature': { qos: 0 },
'sample': { qos: 0 },
'renzyclaire': { qos: 0 },
'Luz-Ian/Temp': { qos: 0 },
'louie/cindy/temp': { qos: 0 },
'diansin/gabatan/temp': { qos: 0 },
'preAnn/temp': { qos: 0 },
'MaryAira': { qos: 0 },
'tychu/temp': { qos: 0 },
})
})


// clickSubscribe.addEventListener('click', function () {
// client.subscribe(inputSubscribe.value);
// timeStamp = new Date();
// var trSubscribe = document.createElement("tr");
// var tdTopicSubscribe = document.createElement("td");
// var tdTimeStampSubscribe = document.createElement("td");
// tdTimeStampSubscribe.style.fontSize = "11px";
// tdTopicSubscribe.style.fontSize = "11px";
// tdTopicSubscribe.appendChild(document.createTextNode(inputSubscribe.value));
// tdTimeStampSubscribe.appendChild(document.createTextNode(timeStamp));
// trSubscribe.appendChild(tdTopicSubscribe