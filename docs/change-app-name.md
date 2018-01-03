# Change app name

## iOS
Open Xcode and select ReactNativeStarterKit as your target, click on General tab and type your app name on Display Name field.

![](assets/images/illustrations/change-app-name.png)

By default a target may or may not be selected, if not you just need to select it.

![](assets/images/illustrations/change-to-target.png)

## Android
Update `app_name` value on `android/app/src/main/res/values/strings.xml` file.

```
<resources>
    <string name="app_name">My new app name</string>
</resources>
```
