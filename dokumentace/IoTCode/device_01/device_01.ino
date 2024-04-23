#include "secrets.h"
#include <ArduinoJson.h>
#include <WiFiClientSecure.h>
#include <PubSubClient.h>
#include "WiFi.h"

#define redPin 12
#define greenPin 32
#define bluePin 27

#define SUBSCRIBE_DATA "device/1/sub"


int msgCount;

const char* ssid = "";
const char* password = "";    

unsigned long lastPublish;

WiFiClientSecure wiFiClient;
void msgReceived(char* topic, byte* payload, unsigned int len);
PubSubClient pubSubClient(AWS_IOT_ENDPOINT, 8883, msgReceived, wiFiClient); 
 

void setup() {
  Serial.begin(9600);
  WiFi.begin(ssid, password);
 
  Serial.println("Connecting to Wi-Fi");
 
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(2000);
    Serial.print(" :( ");
  }

  wiFiClient.setCACert(AWS_CERT_CA);
  wiFiClient.setCertificate(AWS_CERT_CRT);
  wiFiClient.setPrivateKey(AWS_CERT_PRIVATE);
 
  pinMode(redPin,OUTPUT);
  pinMode(greenPin,OUTPUT);
  pinMode(bluePin,OUTPUT);
}


void loop() {

  pubSubCheckConnect();
  
}



void pubSubCheckConnect() {
  if ( ! pubSubClient.connected()) {
        Serial.print("PubSubClient connecting to: "); Serial.print(AWS_IOT_ENDPOINT);

    while ( ! pubSubClient.connected()) {
      Serial.print(".");
      pubSubClient.connect("Device1");
    }
    Serial.println(" connected");
  pubSubClient.subscribe(SUBSCRIBE_DATA);

    
  }
  pubSubClient.loop();
}
void msgReceived(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message received on "); 
  Serial.print(topic); 
  Serial.print(": ");
  String lamp;
  for (int i = 0; i < length; i++) {
    lamp += (char)payload[i];
  }
  StaticJsonDocument<200> doc;
  deserializeJson(doc, lamp);
  int redValue = doc["red"];
  int greenValue = doc["green"];
  int blueValue = doc["blue"];
  Serial.println(redValue);
  Serial.println(greenValue);
  Serial.println(blueValue);

  if(String(topic) == "device/1/sub"){
      if(lamp == "{\"lamp\":\"on\"}") {
          Serial.println("{\"lamp\":\"on\"}");
          analogWrite(redPin, redValue);
          analogWrite(greenPin, greenValue);
          analogWrite(bluePin, blueValue);
        }else if(lamp == "{\"lamp\":\"off\"}") {
          Serial.println("off");
          analogWrite(redPin, 0);
          analogWrite(greenPin, 0);
          analogWrite(bluePin, 0);
        }else{
          analogWrite(redPin, 255);
          analogWrite(greenPin, 255);
          analogWrite(bluePin, 255);
        }
    }
}
