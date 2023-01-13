import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    ActivityIndicator
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';


const EffectComponent = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const tick = () => {
        console.log('load switch ' + loading)
        setLoading(false)
        console.log(!loading)

    }

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        setLoading(true)
        axios.get('https://dummyjson.com/products/').then(res => {
            setData(res.data['products'])
            setLoading(false);
            console.log(data)
            console.log(loading)

        }).catch((e) => console.log(e))
    }


    return (
        loading ? <View style={styles.loadingIdicator}><ActivityIndicator color={"#000"} /></View> : <SafeAreaView style={backgroundStyle}>
            <ScrollView>
                {data.map(e => <Text key={e.id}>{e.id + ' ' + e.description}</Text>)}
            </ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    highlight: {
        fontWeight: '700',
    },
    loadingIdicator: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});

export default EffectComponent;
