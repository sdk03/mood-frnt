import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.moodMeter.app',
  appName: 'mood meter',
  webDir: 'dist/mood',
  server: {
    androidScheme: 'https'
  }
};

export default config;
