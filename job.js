import React from "react";
import firestore from '@react-native-firebase/firestore';
import { List } from 'react-native-paper';

function Job({id, title}){
    async function toggleComplete() {
        await firestore()
        .collection('jobs')
        .doc(id);
    }
    return(
        <List.Item
            title={title}
            onPress={() => toggleComplete()}
        />
    )
}
export default Job;