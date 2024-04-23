#include <DHT.h>
#include <DHT_U.h>
#include <ArduinoJson.h>
#include <ESP8266WiFi.h>
#include <PubSubClient.h>

#define DHTPIN 4 
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);

const char* ssid = "";
const char* password = "";
const char* awsEndpoint = "a311s9u24xexzs-ats.iot.eu-central-1.amazonaws.com";

static const char certificatePemCrt[] PROGMEM = R"EOF(
-----BEGIN CERTIFICATE-----
MIIDWjCCAkKgAwIBAgIVAITtvztdSqKm/Eq1uZgQEqWUVqTPMA0GCSqGSIb3DQEB
CwUAME0xSzBJBgNVBAsMQkFtYXpvbiBXZWIgU2VydmljZXMgTz1BbWF6b24uY29t
IEluYy4gTD1TZWF0dGxlIFNUPVdhc2hpbmd0b24gQz1VUzAeFw0yMTEyMDgyMDIx
MjNaFw00OTEyMzEyMzU5NTlaMB4xHDAaBgNVBAMME0FXUyBJb1QgQ2VydGlmaWNh
dGUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDk25hCPKFoTuDyuM3s
EhwGdA1JBboN7xxX6v0KgO8HiE7IBAvGFHCVJ7DRerkFGuOw+DCD5TatvKCAH4c8
sq6rQZIPGhdzZFxGBuN59nLjqoyv8khOhG97dTfFEyVlt9bdghYH+NGq+PppE61j
i/kkTiQBHYDUTD4ZGlrvLMT7tWlJ2OHBsngnkOXmZSgz6BeBE7DaNM5C7KGZorv9
zH0G8mly2Tmu2+pFWi6s8G1wLsUZ0UJGLgurU4b6CU0JHoDyIgoH9JhKDqp7oWww
F91mCg63dKrJFOH5MdtePzLDt/b1xEVkw6Mhb+qMehsCxh5pUwz1jJG2TxHcSYO3
j3zBAgMBAAGjYDBeMB8GA1UdIwQYMBaAFOv1A77WgBGk/CH8hw51a3iLPj/cMB0G
A1UdDgQWBBSiSJeVriM7n9ygndro3jR80exfpTAMBgNVHRMBAf8EAjAAMA4GA1Ud
DwEB/wQEAwIHgDANBgkqhkiG9w0BAQsFAAOCAQEAPs+VqPbKp/uLDSFcaYcQXzfE
uF8GUTXEdyPyaFvH82FpgN5D5bkEPRv1eSWyH6vPJe3WhP2HhS2n4wkMirgTWTsB
Iq9a24Mlcw3vQ/HF6QCsj0dH3fFS3ABje9Gymqv4MIz6lrxA04XtTm/QKDPdh4lS
hO6cxSjUgG8NjSsqi5a47UjAvUO9tu/UCI/uimsx/sarfzEp0sSLw34P8Phn9FFR
kBn3EBFS25QLDSKsMw/9q14JXVCQMP54Hn427Ge7bnmwpk3+mcf9ksB5ZO9kU1/1
+ZPOujfmyZik57FDLNiUrR9xBqLQ2BfOxhyYhbiv8g51G/CZSAoyYT1S3Pe4jw==
-----END CERTIFICATE-----
)EOF";

static const char privatePemKey[] PROGMEM = R"EOF(
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA5NuYQjyhaE7g8rjN7BIcBnQNSQW6De8cV+r9CoDvB4hOyAQL
xhRwlSew0Xq5BRrjsPgwg+U2rbyggB+HPLKuq0GSDxoXc2RcRgbjefZy46qMr/JI
ToRve3U3xRMlZbfW3YIWB/jRqvj6aROtY4v5JE4kAR2A1Ew+GRpa7yzE+7VpSdjh
wbJ4J5Dl5mUoM+gXgROw2jTOQuyhmaK7/cx9BvJpctk5rtvqRVourPBtcC7FGdFC
Ri4Lq1OG+glNCR6A8iIKB/SYSg6qe6FsMBfdZgoOt3SqyRTh+THbXj8yw7f29cRF
ZMOjIW/qjHobAsYeaVMM9YyRtk8R3EmDt498wQIDAQABAoIBAF4zhZi+HDIzRaSj
LR/e1GpTmqRUFyFlKuWFdGK+b6VKFiN+htohz7WVgNK5ES9owhA2GMIxtzAMVIRo
deImKn+TnetZcg2tYc3xR/EL4H6V1RMXR2wKV1kaBrq4Bsy3v1muEiN159fYZDqc
PuKa2xJ2l5td6Yl5WJY8ovGQHAT+/7eS5nHV0dBhw3m+0oL5fpmP0acPme125g1E
9uN/KW4rEG7AEpf3xVAsFCq1r0e82HMv9kQ2onD0eWvWDoD+Nror/of1ZKQzUMR1
h1kyf+zZkk87RWnoSmhYx6qC+BQlUzsNNlFX6b7I64hIyYnyFni9Xdfb2Y3ijAal
gGj4NYECgYEA/h7N+rA+2SZClptqCBU/UTfLqi+CLHjwf04HOx4wD/WDn9+CT3Oa
54KgiM8qeP7s0C4onaBfYU1nGl49nHcNzpXIN0iu/ecY+7IhwXhj/lIj4m+exV9g
Md88Jc2p64GLJSkShwAmctM4M7V7SnTSY9hMGRvCFIbQwV23BZTpdd8CgYEA5oz0
JUbvLuOp1PQbgKwPGVAhDIXw4F/XgeoFwEMCCQggwW9ZVOXSf38kzgoERAfEO4Z0
Uijfm7fl8tS9eHmmfPxc7eOGKrGwPs7nt1UQ3KeMSt5Uoyl/9XxSLcouTqGN7SCB
S1Ah8Tqa6zZ1/Z/pGJqOe2ShoYjPwfuFXhylIV8CgYEAx2SmXKCz/7EMqJ3zmboK
P5EXJkc2zexrUIiKFfH+5lbPW7+FwQ/FqQgPLKnY+q2UZVkCl4QBsxiH4OG3WDD2
TXWrbu2CGUmeicfgwqzTUPdknsTUgKvwj9FIoaT5QggYhSTwG6ubf5eKTtCEmAyI
FL3gIAduxqpt3HvLIv8QHGMCgYAtWjT80ENk2ewitBJk8XPW6uhValPED5Z5O+v9
sjDITg0DgD/2b29FHWHEFjxYlZ6Ihx6Cuv+hxj850ZekB2o01AAD2+oco++jq1fx
vI4gmeUDJVFI93TweZBA6bDKTwV4TBijFBRZO8oV0xTK25Yi/ORiaZ1SBXO5GR1X
MhNZyQKBgQCVNGV2heFIxyz1/AKkTQ1vNVRbvJHBkWcBgoucL1XRNJ9lcdu/x+qz
knRaERRmsvq13X12a0ur++PUwTRe9EWcyYL8eMRzH7pbNmuwKJF+lD4FDmkyAJpn
IL/IjOZHzFN1IfE/QgX25b1M80/WjpIvUPF0V81otNqgG7+unbXCYw==
-----END RSA PRIVATE KEY-----
)EOF";

static const char caPemCrt[] PROGMEM = R"EOF(
-----BEGIN CERTIFICATE-----
MIIDQTCCAimgAwIBAgITBmyfz5m/jAo54vB4ikPmljZbyjANBgkqhkiG9w0BAQsF
ADA5MQswCQYDVQQGEwJVUzEPMA0GA1UEChMGQW1hem9uMRkwFwYDVQQDExBBbWF6
b24gUm9vdCBDQSAxMB4XDTE1MDUyNjAwMDAwMFoXDTM4MDExNzAwMDAwMFowOTEL
MAkGA1UEBhMCVVMxDzANBgNVBAoTBkFtYXpvbjEZMBcGA1UEAxMQQW1hem9uIFJv
b3QgQ0EgMTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALJ4gHHKeNXj
ca9HgFB0fW7Y14h29Jlo91ghYPl0hAEvrAIthtOgQ3pOsqTQNroBvo3bSMgHFzZM
9O6II8c+6zf1tRn4SWiw3te5djgdYZ6k/oI2peVKVuRF4fn9tBb6dNqcmzU5L/qw
IFAGbHrQgLKm+a/sRxmPUDgH3KKHOVj4utWp+UhnMJbulHheb4mjUcAwhmahRWa6
VOujw5H5SNz/0egwLX0tdHA114gk957EWW67c4cX8jJGKLhD+rcdqsq08p8kDi1L
93FcXmn/6pUCyziKrlA4b9v7LWIbxcceVOF34GfID5yHI9Y/QCB/IIDEgEw+OyQm
jgSubJrIqg0CAwEAAaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAOBgNVHQ8BAf8EBAMC
AYYwHQYDVR0OBBYEFIQYzIU07LwMlJQuCFmcx7IQTgoIMA0GCSqGSIb3DQEBCwUA
A4IBAQCY8jdaQZChGsV2USggNiMOruYou6r4lK5IpDB/G/wkjUu0yKGX9rbxenDI
U5PMCCjjmCXPI6T53iHTfIUJrU6adTrCC2qJeHZERxhlbI1Bjjt/msv0tadQ1wUs
N+gDS63pYaACbvXy8MWy7Vu33PqUXHeeE6V/Uq2V8viTO96LXFvKWlJbYK8U90vv
o/ufQJVtMVT8QtPHRh8jrdkPSHCa2XV4cdFyQzR1bldZwgJcJmApzyMZFo6IQ6XU
5MsI+yMRQ+hDKXJioaldXgjUkK642M4UwtBV8ob2xJNDd2ZhwLnoQdeXeGADbkpy
rqXRfboQnoZsG4q5WTP468SQvvG5
-----END CERTIFICATE-----
)EOF";

BearSSL::X509List client_crt(certificatePemCrt);
BearSSL::PrivateKey client_key(privatePemKey);
BearSSL::X509List rootCert(caPemCrt);

WiFiClientSecure wiFiClient;
PubSubClient pubSubClient(awsEndpoint, 8883, wiFiClient); 

void setup() {
  Serial.begin(115200); Serial.println();
  Serial.println("ESP8266 AWS IoT Example");

  Serial.print("Connecting to "); Serial.print(ssid);
  WiFi.begin(ssid, password);
  WiFi.waitForConnectResult();
  Serial.print(", WiFi connected, IP address: "); Serial.println(WiFi.localIP());

  setCurrentTime();

  wiFiClient.setClientRSACert(&client_crt, &client_key);
  wiFiClient.setTrustAnchors(&rootCert);

  dht.begin();
}

unsigned long lastPublish;
int msgCount;

#define DATA_INTERVAL 2000
#define DATABASE_INTERVAL 900000
 
unsigned long time_1 = 0;
unsigned long time_2 = 0;

//void print_time(unsigned long time_millis);

void loop() {

  pubSubCheckConnect();
  
    float humidity = dht.readHumidity();
    float temp = dht.readTemperature();
    float f = dht.readTemperature(true);

   if (isnan(humidity) || isnan(temp) || isnan(f)) {
      Serial.println(F("Failed to read from DHT sensor!"));
      return;
  }

    StaticJsonDocument<256> doc;
    doc["DHTTemperature"] = temp;
    doc["DHTHumidity"] = humidity;
    Serial.println(temp);

    char out[200];
    int result = serializeJson(doc, out);
 
    
    
     if(millis() >= time_1 + DATA_INTERVAL){
        time_1 +=DATA_INTERVAL;
        pubSubClient.publish("device/1/data", out);
    }
   
    if(millis() >= time_2 + DATABASE_INTERVAL){
        time_2 +=DATABASE_INTERVAL;
        pubSubClient.publish("device/1/database", out);
    }
}

void pubSubCheckConnect() {
  if ( ! pubSubClient.connected()) {
    Serial.print("PubSubClient connecting to: "); Serial.print(awsEndpoint);
    while ( ! pubSubClient.connected()) {
      Serial.print(".");
      pubSubClient.connect("ESPthing");
    }
    Serial.println(" connected");

    
  }
  pubSubClient.loop();
}

void setCurrentTime() {
  configTime(3 * 3600, 0, "pool.ntp.org", "time.nist.gov");

  Serial.print("Waiting for NTP time sync: ");
  time_t now = time(nullptr);
  while (now < 8 * 3600 * 2) {
    delay(500);
    Serial.print(".");
    now = time(nullptr);
  }
  Serial.println("");
  struct tm timeinfo;
  gmtime_r(&now, &timeinfo);
  Serial.print("Current time: "); Serial.print(asctime(&timeinfo));
}
