import * as React from 'react';
import { Text, View, ScrollView  } from 'react-native';
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
    <List.Section title="Treatment Options">
      <List.Accordion
        title="Primary, secondary, and early latent: adults (including pregnant women and people with HIV infection)"titleNumberOfLines={7}
        left={props => <List.Icon {...props} icon={expandedone ? 'folder' : 'folder-open'}
          color={expandedone ? 'blue' : 'blue'}/>}
          onPress={handlePressone}>
        <List.Item  />
       <View>
         <Text NumberOfLines={4} style={styles.accordionText}>
         benzathine penicillin G 2.4 million units IM in a single dose
         </Text>
       </View>
      </List.Accordion>
      <List.Accordion
        title="Late latent adults (including pregnant women and people with HIV infection)"titleNumberOfLines={7}
        left={props => <List.Icon {...props} icon={expandedtwo ? 'folder' : 'folder-open'}
        color={expandedtwo ? 'blue' : 'blue'} />}
        onPress={handlePresstwo}>
        <List.Item  />
        <View>
         <Text NumberOfLines={4} style={styles.accordionText}>
         benzathine penicillin G 7.2 million units total, administered as 3 doses of 2.4 million units IM each at 1-week intervals
         </Text>
       </View>
      </List.Accordion>
      <List.Accordion
        title="Neurosyphilis, ocular syphilis, and otosyphilis
        "titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon={expandedthree ? 'folder' : 'folder-open'}
        color={expandedthree ? 'blue' : 'blue'} />}
        onPress={handlePressthree}>
          <List.Accordion
        title="RECOMMENDED REGIMEN"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon={expandedfour ? 'folder' : 'folder-open'}
        color={expandedfour ? 'blue' : 'blue'} />}
        onPress={handlePressfour}>
        <List.Item  />
        <View>
         <Text NumberOfLines={4} style={styles.accordionText}>
         aqueous crystalline penicillin G 18–24 million units per day, administered as 3–4 million units by IV every 4 hours or continuous infusion, for 10–14 days
         </Text>
       </View>
       </List.Accordion>
       <List.Accordion
        title="ALTERNATE REGIMEN"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon={expandedfive ? 'folder' : 'folder-open'}
        color={expandedfive ? 'blue' : 'blue'}/>}
        onPress={handlePressfive}>
        <List.Item  />
        <View>
         <Text NumberOfLines={4} style={styles.accordionText}>
         procaine penicillin G 2.4 million units IM 1x/day PLUS probenecid 500 mg orally 4x/day, both for 10–14 days
         </Text>
       </View>
       </List.Accordion>
      </List.Accordion>
      <List.Accordion
        title="For children or congenital syphilis
        "titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon={expandedsix ? 'folder' : 'folder-open'}
        color={expandedsix ? 'blue' : 'blue'}/>}
        onPress={handlePresssix}>
        <List.Item  />
        <View>
         <Text NumberOfLines={4} style={styles.accordionText}>
         See Sexually Transmitted Infections Treatment Guidelines, 2021.
         </Text>
       </View>
      </List.Accordion>
    </List.Section>
    </ScrollView>
  );
};

export default MyComponent;
