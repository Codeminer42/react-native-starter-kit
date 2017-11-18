# Android Virtual Device on Ubuntu

## Prerequisites:
#### Android emulator:
Install the emulator:
```
~/android/tools/bin/sdkmanager 'emulator'
```
#### Android system image:

To list installed and available system images and packages:
```
~/android/tools/bin/sdkmanager --list
```
> Use ```--verbose``` to see full paths if necessary.

Install the necessary system image:
```
~/android/tools/bin/sdkmanager 'system-images;android-23;default;x86_64'
```

## Creating a new Android Virtual Device (AVD)
To create your Android Virtual Device:
```
~/android/tools/bin/avdmanager create avd -n newAVD -k 'system-images;android-23;default;x86_64' -d 'pixel'
```
>Syntax: ```-n avd_name -k 'system image path' -d 'device name or id'```

>For more information use: ```~/android/tools/bin/avdmanager -h create avd```

>To list available devices use: ```~/android/tools/bin/avdmanager list device```

If you want to list your AVDs do:
```
~/android/tools/bin/avdmanager list avd
```
or
```
~/android/emulator/emulator -list-avds
```

## Emulating your AVD
```
~/android/emulator/emulator @newAVD
```

To check if your device is connected:
```
adb devices
```
