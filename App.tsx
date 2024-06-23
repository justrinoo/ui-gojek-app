/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import 'nativewind';
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
      }}>
      {/* Header */}
      <SafeAreaView className="bg-[#00880C] py-3 px-4 flex items-center flex-row gap-2">
        <StyledView>
          <TextInput
            className="relative h-10 bg-white rounded-full text-[#646363] m-3 border border-gray-300 p-2.5 placeholder:px-11"
            placeholder="Find services, food, or places"
            //   onChangeText={onChangeText}
            placeholderTextColor={'#646363'}
          />
          <StyledView className="absolute left-7 top-[22px]">
            <Image
              source={require('./public/Search.png')}
              style={{width: 21, height: 21}}
            />
          </StyledView>
        </StyledView>
        <StyledView>
          <Image
            source={require('./public/profile.png')}
            style={{width: 42, height: 42}}
          />
        </StyledView>
      </SafeAreaView>
      {/* Header */}

      {/* Features */}
      <SafeAreaView
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}>
        <StyledView className="p-[33px]">
          <StyledView className="bg-[#00ADD6] rounded-[30px] p-[12px]">
            <StyledView className="flex flex-row gap-x-2">
              <StyledView className="flex flex-row my-2 gap-x-[10px]">
                <StyledView className="flex flex-col gap-y-1">
                  <StyledView className="p-0.5 h-5 bg-[#BDBDBD] rounded-full"></StyledView>
                  <StyledView className="p-0.5 h-5 bg-[#BDBDBD] rounded-full"></StyledView>
                  <StyledView className="p-0.5 h-5 bg-[#BDBDBD] rounded-full"></StyledView>
                </StyledView>
                <StyledView>
                  <StyledView className="bg-white px-[16px] rounded-xl w-[126px] h-[71px] flex flex-col items-start gap-y-0.5">
                    <StyledText className="text-[14px] font-semibold text-[#2F2828]">
                      Gopay
                    </StyledText>
                    <StyledText className="text-[14px] font-semibold text-[#2F2828]">
                      Rp4.048
                    </StyledText>
                    <StyledText className="text-[14px] font-semibold text-[#00880C]">
                      Tap for history
                    </StyledText>
                  </StyledView>
                </StyledView>
              </StyledView>
              <StyledView className="my-2 mx-2 flex flex-row items-center gap-2">
                <StyledView className="flex flex-col items-center justify-center gap-y-1">
                  <Image
                    source={require('./public/services-3.png')}
                    style={{width: 25, height: 25}}
                  />
                  <StyledText className="font-extrabold text-white">
                    Pay
                  </StyledText>
                </StyledView>
                <StyledView className="flex flex-col items-center justify-center gap-y-1">
                  <Image
                    source={require('./public/services-1.png')}
                    style={{width: 25, height: 25}}
                  />
                  <StyledText className="font-extrabold text-white">
                    Top up
                  </StyledText>
                </StyledView>
                <StyledView className="flex flex-col items-center justify-center gap-y-1">
                  <Image
                    source={require('./public/services-2.png')}
                    style={{width: 25, height: 25}}
                  />
                  <StyledText className="font-extrabold text-white">
                    Explore
                  </StyledText>
                </StyledView>
                {/* <StyledView className="bg-white p-5 rounded-xl w-[20px] h-[20px]"></StyledView>
                <StyledView className="bg-white p-5 rounded-xl w-[20px] h-[20px]"></StyledView>
                <StyledView className="bg-white p-5 rounded-xl w-[20px] h-[20px]"></StyledView> */}
              </StyledView>
            </StyledView>
          </StyledView>
        </StyledView>
      </SafeAreaView>

      {/* End Features */}
    </SafeAreaView>
  );
}

export default App;
