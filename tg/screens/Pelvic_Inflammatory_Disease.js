import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import styles from '../src/styles';


const MyComponent = () => {
  const [expandedone, setExpandedone] = React.useState(true);
  const [expandedtwo, setExpandedtwo] = React.useState(true);
  const [expandedthree, setExpandedthree] = React.useState(true);
  const [expandedfour, setExpandedfour] = React.useState(true);
  const handlePressone = () => setExpandedone(!expandedone);
  const handlePresstwo = () => setExpandedtwo(!expandedtwo);
  const handlePressthree = () => setExpandedthree(!expandedthree);
  const handlePressfour = () => setExpandedfour(!expandedfour);

  return (
    <ScrollView style={styles.scrollView}>
    <List.Section title="Treatment Options">
      <List.Accordion
        title="Parenteral treatment"titleNumberOfLines={4}
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
          ceftriaxone 1 gm by IV every 24 hours PLUS doxycycline 100 mg orally or by IV every 12 hours PLUS metronidazole 500 mg orally or by IV every 12 hours OR
          </Text>
        

        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          cefotetan 2 gm by IV every 12 hours PLUS doxycycline 100 mg orally or by IV every 12 hours OR
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          cefoxitin 2 gm by IV every 6 hours PLUS doxycycline 100 mg orally or by IV every 12 hours
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
          ampicillin-sulbactam 3 gm by IV every 6 hours PLUS doxycycline 100 mg orally or by IV every 12 hours OR
          </Text>
        

        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          clindamycin 900 mg by IV every 8 hours PLUS gentamicin 2 mg/kg body weight by IV or IM FOLLOWED BY 1.5 mg/kg body weight every 8 hours. Can substitute with 3–5 mg/kg body weight 1x/day
          </Text>
        

        </View>
      </List.Accordion>
      </List.Accordion>
      <List.Accordion
        title="Intramuscular or oral treatment"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon={expandedfour ? 'folder' : 'folder-open'}
        color={expandedfour ? 'blue' : 'blue'} />}
        onPress={handlePressfour}>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          ceftriaxone 500 mg IM in a single dose<Text style={{fontSize: 8, lineHeight: 8}}> 6</Text> PLUS doxycycline 100 mg orally 2x/day for 14 days WITH metronidazole 500 mg orally 2x/day for 14 days OR
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          cefoxitin 2 gm IM in a single dose AND probenecid 1 gm orally, administered concurrently in a single dose PLUS doxycycline 100 mg orally 2x/day for 14 days WITH metronidazole 500 mg orally 2x/day for 14 days OR
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          Other parenteral third-generation cephalosporin (e.g., ceftizoxime or cefotaxime) PLUS
doxycycline 100 mg orally 2x/day for 14 days WITH metronidazole 500 mg orally 2x/day for 14 days
          </Text>
        </View>
      </List.Accordion>
      <View>
      <Text NumberOfLines={4}>
      {"\n"}
      {"\n"}
      The complete list of recommended regimens can be found in Sexually Transmitted Infections Treatment Guidelines, 2021.
      </Text>
    </View>
    </List.Section>
    </ScrollView>
  );
};

export default MyComponent;
