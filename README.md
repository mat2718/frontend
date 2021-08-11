# Perfect Personnel Placement Frontend

![Written in React Native](https://img.shields.io/badge/LANGUAGE-REACT%20NATIVE%20%28TYPESCRIPT%29-blue?style=for-the-badge&logo=react)
![Managed by Expo](https://img.shields.io/badge/MANAGED%20BY-EXPO-purple?style=for-the-badge&logo=expo)
![Works on Android](https://img.shields.io/badge/DEVELOPED%20FOR-ANDROID-green?style=for-the-badge&logo=android)

NOTE: This is the frontend of the repository. To access the backend repository, refer to
[Perfect-Personnel-Placement/backend](https://github.com/Perfect-Personnel-Placement/backend).

## Project Description

The Serverless Training planner is a serverless mobile app that Revature managers can use to look at important information regarding clientele demands and batch output for the company. This service visualizes all current batches planned along with any associated information. It also visualizes that batch output alongside the client demand for associates. Managers may input information for clients, their demands, and batches which consist of a curriculum composed of skills, the number of associates, a trainer, and the dates for the batch. This service helps ease the management of supply and demand for the company and is an organizational aid.

## Frontend Stack

- React Native
- TypeScript
- Jest/Enzyme
- Expo

## Features

List of features ready and TODOs for future development
To-do list:

### Bottom Navigation

- Batch Screen (first screen):
  - Add a batch
  - View all batches and overall graph of types of batches and trainers
- Client Screen:
  - View clients and their demands
  - Add a client
  - Edit clients' demands
- Curricula Screen:
  - View curricula
  - Create a curriculum by adding associated skills
  - Edit curriculum
- Trainer Screen:
  - View all trainers
  - Search for a trainer through the searchbar
  - View/Update a specific trainer's information
  - Add a trainer

### Drawer Navigation

- Calendar
- Skills
- Use Diagram
- Logout

## Getting Started

Quick and Easy Use:

In order to run P<sup>3</sup>, please install the Expo Go app on your android mobile device. Then, using the Expo Go app, scan the QR code below:

<!---
<p align="center">
 <img src = alt="Insert QR Code here"/>
</p>
--->

Other Methods:

- If the above method is not suitable for you, you have two options to download the APK from. Both use the provided link: [insert apk link here]
  - Using your mobile device (_preferable choice would be to use Expo or download using the emulator_):
    1. Enable sideloading
    2. Allow Permissions for Unknown Apps. The location depends on the version of the device. Refer here: https://www.verizon.com/support/knowledge-base-222186/
    3. [Download the app](insert link here)
    4. Install any dependencies that pop up. You will be prompted.
  - Using an Emulator:
    1. [Download the app](insert link here)
    2. Download and Install [Android Studio](https://developer.android.com/studio)
    3. Create a blank project and open the AVD (Android Virtual Device) located in the top right of your screen.
    4. Create a device if one is not already present and choose one of the newer models. We recommend the Pixel 4a.
    5. Press the play icon (expect a long start up time) and drag and drop the APK on the emulator screen. Now it will begin installing and you are good to go.

**There is no login screen so expect the batches screen upon startup.**

### For Development:

To clone the repository, run the following command in your terminal:

```powershell
https://github.com/Perfect-Personnel-Placement/frontend.git
```

Alternatively, if you have Github Desktop, you can click on **Code** and **Open with Github Desktop**.
Be sure [NodeJS](https://nodejs.org/en/download/) is installed as well as a text editor. We used [Visual Studio Code](https://code.visualstudio.com/download).

To check if NodeJS and Node Package Manager installed correctly, run the following command:

```powershell
node --version
npm --version
```

Both should result in a version display.
Once installed, open up the root of the repository and install P<sup>3</sup>'s dependencies:

```powershell
npm install
```

This will read from the package.json and install listed dependencies, including React and TypeScript. At this point, everything should be ready.

Now, you are ready to run the application. Run in the root directory:

```powershell
npm start
```

Then, a new tab will appear in your browser giving you several methods of running the application. You may use iOS during development; however, we do not have a developer's license for iOS which is why the current iteration of P<sup>3</sup> can only be run on an android device.

For more information on key components, visit the COMPONENT.md in the root.

## Usage

REMOVE LATER: Each screen is not rendering on purpose at this moment. Once they are done, we will put the .png in the assets folder and reference them here.

### Batches Screen

<!---
<p align="center">
 <img src = alt="Batches Screen located in ()"/>
</p>
--->

### Clients Screen

<!---
<p align="center">
 <img src = alt="Clients Screen located in ()"/>
</p>
--->

### Curricula Screen

<!---
<p align="center">
 <img src = alt="Curricula Screen located in ()"/>
</p>
--->

### Trainer Screen

<!---
<p align="center">
 <img src = alt="Trainer Screen located in ()"/>
</p>
--->

### Drawer Navigation

<!---
<p align="center">
 <img src = alt="Drawer located in ()"/>
</p>
--->

## Contributors

- [Joab Smith](https://github.com/j-m-smith426)
- [Red Oral](https://github.com/redoral)
- [Matthew Otto](https://github.com/MattlttaM)
- [Matthew Hanrahan](https://github.com/Thomas-Marik)
- [Caleb Sword](https://github.com/calebmsword)
- [Hannah Mulato](https://github.com/hpeninah)
- [Kent Smith](https://github.com/kentsmith1996)
- [Kaiyip Ho](https://github.com/Kaichloe)
- [Imran Ilyas](https://github.com/imranilyas)

## License

[![MIT](https://img.shields.io/github/license/RevatureRobert/2106Jun07RNCN-2-p2-be?style=for-the-badge)](https://github.com/Perfect-Personnel-Placement/frontend/blob/24ef3a7f2e226f47707beaf91a3efbc4b2a4a644/LICENSE)
