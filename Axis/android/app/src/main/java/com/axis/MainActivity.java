package com.axis;

import android.os.Bundle;
import com.reactnativenavigation.controllers.SplashActivity;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends SplashActivity {

    //@Override
    //protected void onCreate(Bundle savedInstanceState) {
    //    SplashScreen.show(this);
    //    super.onCreate(savedInstanceState);
    //}
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    protected String getMainComponentName() {
        return "Axis";
    }
}
