import * as React from 'react';
import {  Text, View, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import styles from '../src/styles';

const MyComponent = () => {
  const [expandedone, setExpandedone] = React.useState(true);
  const [expandedtwo, setExpandedtwo] = React.useState(true);
  const [expandedthree, setExpandedthree] = React.useState(true);
  const [expandedfour, setExpandedfour] = React.useState(true);
  const [expandedfive, setExpandedfive] = React.useState(true);
  const [expandedsix, setExpandedsix] = React.useState(true);
  const [expandedseven, setExpandedseven] = React.useState(true);
  const [expandedeight, setExpandedeight] = React.useState(true);
  const [expandednine, setExpandednine] = React.useState(true);
  const [expandedten, setExpandedten] = React.useState(true);
  const [expandedeleven, setExpandedeleven] = React.useState(true);
  const handlePressone = () => setExpandedone(!expandedone);
  const handlePresstwo = () => setExpandedtwo(!expandedtwo);
  const handlePressthree = () => setExpandedthree(!expandedthree);
  const handlePressfour = () => setExpandedfour(!expandedfour);
  const handlePressfive = () => setExpandedfive(!expandedfive);
  const handlePresssix = () => setExpandedsix(!expandedsix);
  const handlePressseven = () => setExpandedseven(!expandedseven);
  const handlePresseight = () => setExpandedeight(!expandedeight);
  const handlePressnine = () => setExpandednine(!expandednine);
  const handlePressten = () => setExpandedten(!expandedten);
  const handlePresseleven = () => setExpandedeleven(!expandedeleven);

  return (
    <ScrollView style={styles.scrollView}>
    <List.Section title="Treatment Options">
   <List.Accordion
      title="Non Recurent Recommendations"titleNumberOfLines={4}
      left={props => <List.Icon {...props} icon={expandedone ? 'folder' : 'folder-open'}
          color={expandedone ? 'blue' : 'blue'}/>}
          onPress={handlePressone}
          >
      <List.Item NumberOfLines={4} />
    <List.Accordion
      title="Recommended Regimen"titleNumberOfLines={4}
      left={props => <List.Icon {...props} icon={expandedtwo ? 'folder' : 'folder-open'}
      color={expandedtwo ? 'blue' : 'blue'} />}
      onPress={handlePresstwo}
      >
      <List.Item NumberOfLines={4} />
      <View>
<Text NumberOfLines={4} style={styles.accordionText}> 
doxycycline 100 mg orally 2x/day for 7 days
</Text>
</View>
      </List.Accordion>
   
    <List.Accordion
            title="Alternate Regimens"titleNumberOfLines={4}
            left={(props) => <List.Icon {...props} icon={expandedthree ? 'folder' : 'folder-open'}
            color={expandedthree ? 'blue' : 'blue'} />}
            onPress={handlePressthree}
          >
            <List.Item NumberOfLines={4} />
            <View>
              <Text NumberOfLines={4} style={styles.accordionText} >azithromycin 1 gm orally in a single dose OR</Text>
            </View>
            <List.Item NumberOfLines={4} />
            <View>
              <Text NumberOfLines={4} style={styles.accordionText}>azithromycin 500 mg orally in a single dose, THEN 250 mg 1x/day for 4 days</Text>
            </View>
          </List.Accordion>
        </List.Accordion>
          
          <List.Accordion
            title="Persistent or Recurrent NGU: test for Mycoplasma genitalium:"titleNumberOfLines={5}
            left={(props) => <List.Icon {...props} icon={expandedfour ? 'folder' : 'folder-open'}
            color={expandedfour ? 'blue' : 'blue'} />}
            onPress={handlePressfour}
          ><List.Item NumberOfLines={4} />
            <List.Accordion 
      title="If M. genitalium resistance testing is unavailable but M. genitalium is detected by an FDA-cleared NAAT
      "titleNumberOfLines={7}
      left={props => <List.Icon {...props} icon={expandedfive ? 'folder' : 'folder-open'}
      color={expandedfive ? 'blue' : 'blue'}/>}
      onPress={handlePressfive}>
        <List.Accordion
      title="Recommended Regimen"titleNumberOfLines={4}
      left={props => <List.Icon {...props} icon={expandedsix ? 'folder' : 'folder-open'}
      color={expandedsix ? 'blue' : 'blue'}/>}
      onPress={handlePresssix}>
      <List.Item NumberOfLines={4} />
      <View>
<Text NumberOfLines={4} style={styles.accordionText}>
doxycycline 100 mg orally 2x/day for 7 days, FOLLOWED BY moxifloxacin 400 mg 1x/day for 7 days
</Text>
</View>
      </List.Accordion>
      <List.Accordion
            title="Alternate Regimens"titleNumberOfLines={4}
            left={(props) => <List.Icon {...props} icon={expandedseven ? 'folder' : 'folder-open'}
            color={expandedseven ? 'blue' : 'blue'}/>}
            onPress={handlePressseven}
          >
            <List.Item NumberOfLines={4} />
            <View>
              <Text NumberOfLines={4} style={styles.accordionText}> For settings without resistance testing and when moxifloxacin cannot be used:
doxycycline 100 mg orally 2x/day for 7 days, FOLLOWED BY azithromycin 1 gm orally on first day, FOLLOWED BY azithromycin 500 mg orally 1x/day
for 3 days and a test-of-cure 21 days after completion of therapy</Text>
            </View>
            
          </List.Accordion>
            
    </List.Accordion>
    <List.Accordion 
      title="If resistance testing is available, use resistance-guided therapy

      "titleNumberOfLines={4}
      left={props => <List.Icon {...props} icon={expandedeight ? 'folder' : 'folder-open'}
      color={expandedeight ? 'blue' : 'blue'}/>}
      onPress={handlePresseight}>
        <List.Accordion
      title="Recommended Regimen"titleNumberOfLines={4}
      left={props => <List.Icon {...props} icon={expandednine ? 'folder' : 'folder-open'}
      color={expandednine ? 'blue' : 'blue'}/>}
      onPress={handlePressnine}>
      <List.Item NumberOfLines={4} />
      <View>
<Text NumberOfLines={4} style={styles.accordionText}>
Macrolide sensitive
doxycycline 100 mg orally 2x/day for 7 days, FOLLOWED BY azithromycin 1 gm orally initial dose, FOLLOWED BY azithromycin 500 mg orally 1x/day for 3 additional days (2.5 gm total){'\n'}{'\n'}
Macrolide resistance
doxycycline 100 mg orally 2x/day for 7 days, FOLLOWED BY moxifloxacin 400 mg orally 1x/day for 7 days

</Text>
</View>
      </List.Accordion> 
      </List.Accordion>  
      <List.Accordion 
      title="Test for Trichomonas vaginalis in heterosexual men in areas where infection is prevalent


      "titleNumberOfLines={7}
      left={props => <List.Icon {...props} icon={expandedten ? 'folder' : 'folder-open'}
      color={expandedten ? 'blue' : 'blue'}/>}
      onPress={handlePressten}>
        <List.Accordion
      title="Recommended Regimen"titleNumberOfLines={4}
      left={props => <List.Icon {...props} icon={expandedeleven ? 'folder' : 'folder-open'}
      color={expandedeleven ? 'blue' : 'blue'}/>}
      onPress={handlePresseleven}>
      <List.Item NumberOfLines={4} />
      <View>
<Text NumberOfLines={4} style={styles.accordionText}>
metronidazole 2 gm orally in a single dose OR tinidazole 2 gm orally in a single dose
</Text>
</View>
      </List.Accordion> 
      </List.Accordion>  
          </List.Accordion>
          
  </List.Section>
  </ScrollView>
  );
};

export default MyComponent;
