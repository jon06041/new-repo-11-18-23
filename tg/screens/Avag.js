import * as React from 'react';
import {  Text, View, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import styles from '../src/styles';

const MyComponent = () => {
  const [expandedone, setExpandedone] = React.useState(true);
  
  const handlePressone = () => setExpandedone(!expandedone);
  

  return (
    <ScrollView style={styles.scrollView}>
    <List.Section title="Treatment Options">
      <List.Accordion
        title="Recommended Regimens for initial therapy"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon={expandedone ? 'folder' : 'folder-open'}
          color={expandedone ? 'blue' : 'blue'}/>}
          onPress={handlePressone}>
        <List.Item  />
        <View>
<Text NumberOfLines={4} style={styles.accordionText}>
Kanamycin<Text style={styles.superscript}>26</Text> ovules 100mg (corresponding to 83 mg of active compound) 1 ovule per day for 6 days OR
</Text>
<List.Item  />
        
          <Text NumberOfLines={4} style={styles.accordionText}>

Clindamycin<Text style={styles.superscript}>26</Text> 2% topical cream 4 to 5 g daily for 4 to 6 weeks OR</Text>
<List.Item  />
       
          <Text NumberOfLines={4} style={styles.accordionText}>
Clindamycin<Text style={styles.superscript}>26</Text> 2% topical cream 5 g daily with hydrocortisone 300 mg to 500 mg for 7 to 21 days OR</Text>
<List.Item  />
       
          <Text NumberOfLines={4} style={styles.accordionText}>
Moxifloxacin<Text style={styles.superscript}>26</Text> 400 mg q.d. for 6 days</Text>



        </View>
        <List.Item  />
        
      </List.Accordion>
      <Text style={styles.innerTextred}>The CDC does not provide treatment guidelines for Aerobic vaginitis (AV); Therefore, separate references are cited for each guideline.</Text>
     
    </List.Section>
    </ScrollView>
  );
};

export default MyComponent;
