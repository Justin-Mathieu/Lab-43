import { Gyroscope, D } from 'expo-sensors';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Switch, } from 'react-native';


function Gyro() {
    const [gyroData, setGyroData] = useState({ x: 0, y: 0, z: 0 });
    const [gyroEnabled, setGyroEnabled] = useState(false);

    useEffect(() => {
        let subscription;
        if (gyroEnabled) {
             subscription = Gyroscope.addListener(gyroData => {
                setGyroData(gyroData)
            })
        }
        else { subscription?.remove() }
        // return subscription?.remove();
    }, [gyroEnabled])


    function toggleGyro() {
        setGyroEnabled(true)
    }


    return (
        <SafeAreaView>
            <View>
<Switch onChange={toggleGyro}/>
            </View>
            <View style={{
                  width: 50,
                height: 50,
                borderRadius: 50,  
                backgroundColor: 'blue',
                transform: [
                    {translateX:gyroData.y * 100},
                    {translateY: gyroData.x * 50}
                ],
            }}
            />


        </SafeAreaView>
    )
}

export default Gyro;



