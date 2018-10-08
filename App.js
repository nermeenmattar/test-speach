/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Tts from 'react-native-tts';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  x = '';
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setTimeout(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 5000);
    //  Tts.voices().then(voices => {this.x = JSON.stringify(voices)});
    Tts.voices().then(voices => {
      const voiceLength =voices.length;
      for(var i =0; i< voiceLength; i++) {
        if(voices[i].language.toLowerCase().includes('ar')) {
          this.x += JSON.stringify(voices[i]);
        }
        
      }
      // this.x = JSON.stringify(voices.length);
      
    });

  }


  render() {
    Tts.getInitStatus().then(() => {
      Tts.setDefaultLanguage('ar-SA');
      Tts.setDefaultRate(1.3);
      Tts.setDefaultPitch(1.3);

      Tts.speak('...يولد أي جهاز كهربائي أحادي أو ضمن نظام كهربائي أثناء عمله حقولا كهرومغناطيسية يمكن ان تؤدي الى اضطرابات وخلل في عمل ووظيفة الأجهزة الأخرى المجاورة له والعكس...وسوف أحاول الإجابة عن التساؤلات: ما هو التحمل والتلاؤم الكهرومغناطيسي للأجهزة وما هي الطرق المستخدمة للحد منها...الزراعة الواسعة: وفيها يتم استخدام الغذاء الطبيعي دون استخدام أسمدة او غذاء اضافي. هذا النمط يستخدم على نطاق واسع في حوض المتوسط خاصة في مصر...ولاشك ان استعمال الألمنيوم وسبائكه في صناعة السيارات سوف يوفر الوقود والوزن ويقلل من التأثير الحراري في الكون نتيجة قلة استهلاك الوقود...15%...كيف حالك؟ بشر عن صحتك؟ أنا بخير و الحمد لله ...كم سعر هذه العلبة؟ ليش غالية؟...أمي تقول جيب معك حليب و لبن و 6 تفاح و بريالين خبز...درس الرياضيات اليوم جدا صعب و لم افهم شيء...أنا جوعان أريد الغداء ثم اريد ان أنام قليلا...هل تعرف أين مبنى العيادات الخارجية، أريد تخصص الباطنية و أريد عمل تحاليل شاملة...')
      Speech.speak({
        text: 'React Native Speech is awesome!  I\'m going to use it in my next project.',
        voice: 'en-US'
      });
   });
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to {this.x} Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
