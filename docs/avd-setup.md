# Android Virtual Device on Ubuntu
To simplify your work we created a [AVD helper using shell script](docs/avd-helper). Try it out.    
### 1. Prerequisites:
------
##### 1.1. Android emulator:
------
Install the emulator:
```
~/android/tools/bin/sdkmanager 'emulator'
```
##### 1.2. Android system image:
------
Install the necessary system image:
```
~/android/tools/bin/sdkmanager 'system-images;android-24;google_apis_playstore;x86'
```
> To list installed and available system images and packages:```~/android/tools/bin/sdkmanager --list --verbose```

### 2. Creating a new Android Virtual Device (AVD)
------
To create your Android Virtual Device:
```
~/android/tools/bin/avdmanager create avd --name 'your-avd-name' --package 'system-images;android-24;google_apis_playstore;x86' --device 'Nexus 5X'
```
>For more information use: ```~/android/tools/bin/avdmanager -h create avd```

>To list available devices use: ```~/android/tools/bin/avdmanager list device```

>To list your AVDs do: ```~/android/tools/bin/avdmanager list avd``` or ```~/android/emulator/emulator -list-avds```

### 3. Emulating your AVD
------
To emulate your AVD do:
```
~/android/emulator/emulator -avd 'your-avd-name' -skin 1080x1920:420dpi
```

> To check if your device is connected: ```adb devices```

If you want your AVD to have the device skin add the following lines to your AVD `./android/avd/{your_avd_name}/config.ini`
```
showDeviceFrame=yes
skin.dynamic=yes
skin.name=nexus_5x
skin.path=/home/murilov/Android/skins/nexus_5x
```
