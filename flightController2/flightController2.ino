#include <Servo.h>

// ESC control using Servo library
Servo esc1, esc2, esc3, esc4;

// Receiver input pins
int throttlePin = 8;  // Throttle connected to D8
int rollPin = 9;      // Roll connected to D9
int pitchPin = 10;    // Pitch connected to D10
int yawPin = 11;      // Yaw connected to D11

// ESC pins
int esc1Pin = 4;  // Front left motor (ESC1) connected to D4
int esc2Pin = 5;  // Front right motor (ESC2) connected to D5
int esc3Pin = 6;  // Rear left motor (ESC3) connected to D6
int esc4Pin = 7;  // Rear right motor (ESC4) connected to D7

// ESC pulse limits
int minPulse = 1000;
int maxPulse = 2000;

// Variables to store PWM input
int throttleInput = 0;
int rollInput = 0;
int pitchInput = 0;
int yawInput = 0;

// Variables to store ESC output
int esc1Output = 0;
int esc2Output = 0;
int esc3Output = 0;
int esc4Output = 0;

void setup() {
  // Start Serial communication for logging
  Serial.begin(9600);

  // Attach ESCs to pins
  esc1.attach(esc1Pin);  // Front left motor (ESC1) pin D4
  esc2.attach(esc2Pin);  // Front right motor (ESC2) pin D5
  esc3.attach(esc3Pin);  // Rear left motor (ESC3) pin D6
  esc4.attach(esc4Pin);  // Rear right motor (ESC4) pin D7

  // Initial ESC values (motors off)
  esc1.writeMicroseconds(minPulse);
  esc2.writeMicroseconds(minPulse);
  esc3.writeMicroseconds(minPulse);
  esc4.writeMicroseconds(minPulse);

  // Set up PWM receiver input pins
  pinMode(throttlePin, INPUT);
  pinMode(rollPin, INPUT);
  pinMode(pitchPin, INPUT);
  pinMode(yawPin, INPUT);
}

void loop() {
  // Read PWM inputs from receiver
  throttleInput = pulseIn(throttlePin, HIGH, 25000);  // Reading PWM on throttle pin (D8)
  rollInput = pulseIn(rollPin, HIGH, 25000);          // Reading PWM on roll pin (D9)
  pitchInput = pulseIn(pitchPin, HIGH, 25000);        // Reading PWM on pitch pin (D10)
  yawInput = pulseIn(yawPin, HIGH, 25000);            // Reading PWM on yaw pin (D11)



  //  rollInput = rollInput + 30;
  //  pitchInput = pitchInput + 500;
  //  yawInput = yawInput - 1500;


  // Ensure inputs are within expected PWM range (1000 to 2000 microseconds)
  throttleInput = constrain(throttleInput, minPulse, maxPulse);
  rollInput = constrain(rollInput, minPulse, maxPulse);
  pitchInput = constrain(pitchInput, minPulse, maxPulse);
  yawInput = constrain(yawInput, minPulse, maxPulse);




  //  Motor mixing logic (X-configuration quadcopter)
  // esc1Output = constrain(throttleInput + pitchInput - rollInput - yawInput, minPulse, maxPulse);  // Front left motor
  // esc2Output = constrain(throttleInput + pitchInput + rollInput + yawInput, minPulse, maxPulse);  // Front right motor
  // esc3Output = constrain(throttleInput - pitchInput + rollInput - yawInput, minPulse, maxPulse);  // Rear left motor
  // esc4Output = constrain(throttleInput - pitchInput - rollInput + yawInput, minPulse, maxPulse);  // Rear right motor


  // mixer for all escs there is only one throttle input but we are creating 4 throttle signals using just one single pwm



  esc1Output = constrain(throttleInput, minPulse, maxPulse);  // Front left motor
  esc2Output = constrain(throttleInput, minPulse, maxPulse);  // Front right motor
  esc3Output = constrain(throttleInput, minPulse, maxPulse);  // Rear left motor
  esc4Output = constrain(throttleInput, minPulse, maxPulse);  // Rear right motor


  //  this is for forward and reverse direction
  if (pitchInput > 1600) {
    esc3Output = constrain(throttleInput + 200 , minPulse, maxPulse);  // Rear left motor
    esc4Output = constrain(throttleInput + 200, minPulse, maxPulse);  // Rear right motor
  } else if (pitchInput < 1400) {
    esc1Output = constrain(throttleInput + 200, minPulse, maxPulse);  // Front left motor
    esc2Output = constrain(throttleInput + 200, minPulse, maxPulse);  // Front right motor
  }




  // this is for yaw


  if (yawInput > 1600) {

    esc1Output = constrain(throttleInput +200, minPulse, maxPulse);  // Front left motor
    esc4Output = constrain(throttleInput + 200, minPulse, maxPulse);  // Rear right motor

  } else if (yawInput < 1400) {

    esc2Output = constrain(throttleInput + 200, minPulse, maxPulse);  // Front right motor
    esc3Output = constrain(throttleInput + 200, minPulse, maxPulse);  // Rear left motor
  }




  // this is for roll


  if (rollInput > 1600) {
    esc4Output = constrain(throttleInput + 200, minPulse, maxPulse);  // Rear right motor
    esc2Output = constrain(throttleInput + 200, minPulse, maxPulse);  // Front right motor

  } else if (rollInput < 1400) {
    esc3Output = constrain(throttleInput + 200, minPulse, maxPulse);  // Rear left motor
    esc1Output = constrain(throttleInput + 200, minPulse, maxPulse);  // Front left motor
  }


  // Serial Monitor logging for receiver signals and ESC outputs
  Serial.print("Throttle: ");
  Serial.print(throttleInput);



  Serial.print("\t Roll: ");
  Serial.print(rollInput);
  Serial.print("\t Pitch: ");
  Serial.print(pitchInput);
  Serial.print("\t Yaw: ");
  Serial.println(yawInput);

  Serial.print("\t ESC1: ");
  Serial.print(esc1Output);
  Serial.print("\t ESC2: ");
  Serial.print(esc2Output);
  Serial.print("\t ESC3: ");
  Serial.print(esc3Output);
  Serial.print("\t ESC4: ");
  Serial.println(esc4Output);

  // Send PWM signals to the ESCs
  esc1.writeMicroseconds(esc1Output);
  esc2.writeMicroseconds(esc2Output);
  esc3.writeMicroseconds(esc3Output);
  esc4.writeMicroseconds(esc4Output);

  // Add a small delay to make the Serial Monitor easier to read
  delay(1000);
}
