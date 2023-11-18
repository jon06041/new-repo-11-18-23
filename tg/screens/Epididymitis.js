
import {  Text, View, ScrollView} from 'react-native';
import * as React from 'react';
import { List } from 'react-native-paper';
import styles from '../src/styles';

const MyComponent = () => {
  const [expandedone, setExpandedone] = React.useState(true);
  const [expandedtwo, setExpandedtwo] = React.useState(true);
  const [expandedthree, setExpandedthree] = React.useState(true);
  const handlePressone = () => setExpandedone(!expandedone);
  const handlePresstwo = () => setExpandedtwo(!expandedtwo);
  const handlePressthree = () => setExpandedthree(!expandedthree);
  

  return (
    <ScrollView style={styles.scrollView}>
    <List.Section title="Treatment Options">
      <List.Accordion
        title="For acute epididymitis most likely caused by sexually transmitted chlamydia and gonorrhea"
        titleNumberOfLines={3}
        left={(props) => <List.Icon {...props} icon={expandedone ? 'folder' : 'folder-open'}
        color={expandedone ? 'blue' : 'blue'}/>}
        onPress={handlePressone}
      >
        <List.Item />
        <View>
          <Text style={styles.accordionText}>ceftriaxone 500 mg IM in a single dose<Text style={{fontSize: 8, lineHeight: 8, backgroundColor: 'skyblue'}}>6</Text> PLUS</Text>
        </View>
        <List.Item />
        <View>
          <Text style={styles.accordionText}>doxycycline 100 mg orally 2x/day for 10 days</Text>
        </View>
      </List.Accordion>
      <List.Accordion
        title="For acute epididymitis most likely caused by chlamydia, gonorrhea, or enteric organisms (men who practice insertive anal sex)"
        titleNumberOfLines={4}
        left={(props) => <List.Icon {...props} icon={expandedtwo ? 'folder' : 'folder-open'}
        color={expandedtwo ? 'blue' : 'blue'} />}
        onPress={handlePresstwo}
      >
        <List.Item />
        <View>
          <Text style={styles.accordionText}>ceftriaxone 500 mg IM in a single dose<Text style={{fontSize: 8, lineHeight: 8, backgroundColor: 'skyblue'}}>6</Text> PLUS</Text>
        </View>
        <List.Item />
        <View>
          <Text style={styles.accordionText}>levofloxacin 500 mg orally 1x/day for 10 days</Text>
        </View>
      </List.Accordion>
      <List.Accordion
        title="For acute epididymitis most likely caused by enteric organisms only"
        titleNumberOfLines={3}
        left={(props) => <List.Icon {...props} icon={expandedthree ? 'folder' : 'folder-open'}
        color={expandedthree ? 'blue' : 'blue'} />}
        onPress={handlePressthree}
      >
        <List.Item />
        <View>
          <Text style={styles.accordionText}>levofloxacin 500 mg orally 1x/day for 10 days days</Text>
        </View>
      </List.Accordion>
    </List.Section>
    </ScrollView>
  );
};

export default MyComponent;
