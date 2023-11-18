import * as React from 'react';
import {  Text, View,  ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import styles from '../src/styles';

const MyComponent = () => {
  const [expandedone, setExpandedone] = React.useState(true);
  const [expandedtwo, setExpandedtwo] = React.useState(true);
  const [expandedthree, setExpandedthree] = React.useState(true);
  const [expandedfour, setExpandedfour] = React.useState(true);
  const [expandedfive, setExpandedfive] = React.useState(true);
  const [expandedsix, setExpandedsix] = React.useState(true);
  const handlePressone = () => setExpandedone(!expandedone);
  const handlePresstwo = () => setExpandedtwo(!expandedtwo);
  const handlePressthree = () => setExpandedthree(!expandedthree);
  const handlePressfour = () => setExpandedfour(!expandedfour);
  const handlePressfive = () => setExpandedfive(!expandedfive);
  const handlePresssix = () => setExpandedsix(!expandedsix);

  return (
    <ScrollView style={styles.scrollView}>
    <List.Section title="Treatment Options (see note 25)">
      <List.Accordion
        title="Women
        "titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon={expandedone ? 'folder' : 'folder-open'}
          color={expandedone ? 'blue' : 'blue'}/>}
          onPress={handlePressone}>
          <List.Accordion
        title="RECOMMENDED REGIMEN"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon={expandedtwo ? 'folder' : 'folder-open'}
        color={expandedtwo ? 'blue' : 'blue'} />}
        onPress={handlePresstwo}>
        <List.Item  />
        <View>
         <Text NumberOfLines={4} style={styles.accordionText}> 
         metronidazole 500 mg orally 2x/day for 7 days
         </Text>
       </View>
       </List.Accordion>
       <List.Accordion
        title="ALTERNATE REGIMEN"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon={expandedthree ? 'folder' : 'folder-open'}
        color={expandedthree ? 'blue' : 'blue'} />}
        onPress={handlePressthree}>
        <List.Item  />
        <View>
         <Text NumberOfLines={4} style={styles.accordionText}>
         tinidazole 2 gm orally in a single dose
         </Text>
       </View>
       </List.Accordion>
      </List.Accordion>
      <List.Accordion
        title="Men
        "titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon={expandedfour ? 'folder' : 'folder-open'}
        color={expandedfour ? 'blue' : 'blue'} />}
        onPress={handlePressfour}>
          <List.Accordion
        title="RECOMMENDED REGIMEN"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon={expandedfive ? 'folder' : 'folder-open'}
        color={expandedfive ? 'blue' : 'blue'}/>}
        onPress={handlePressfive}>
        <List.Item  />
        <View>
         <Text NumberOfLines={4} style={styles.accordionText}>
         metronidazole 2 gm orally in a single dose
         </Text>
       </View>
       </List.Accordion>
       <List.Accordion
        title="ALTERNATE REGIMEN"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon={expandedsix ? 'folder' : 'folder-open'}
        color={expandedsix ? 'blue' : 'blue'}/>}
        onPress={handlePresssix}>
        <List.Item  />
        <View>
         <Text NumberOfLines={4} style={styles.accordionText}>
         tinidazole 2 gm orally in a single dose
         </Text>
       </View>
       </List.Accordion>
      </List.Accordion>
    </List.Section>
    </ScrollView>
  );
};

export default MyComponent;