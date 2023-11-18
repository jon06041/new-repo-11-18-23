
import {  Text, View, ScrollView  } from "react-native";
import * as React from "react";
import { List } from "react-native-paper";
import styles from '../src/styles';

const MyComponent = () => {
  const [expandedone, setExpandedone] = React.useState(true);
  const [expandedtwo, setExpandedtwo] = React.useState(true);
  const handlePressone = () => setExpandedone(!expandedone);
  const handlePresstwo = () => setExpandedtwo(!expandedtwo);
  

  return (
    <ScrollView style={styles.scrollView}>
    <List.Section title="Treatment Options">
      <List.Accordion
        title="RECOMMENDED REGIMEN" titleNumberOfLines={4}
        left={(props) => <List.Icon {...props}  icon={expandedone ? 'folder' : 'folder-open'}
        color={expandedone ? 'blue' : 'blue'}/>}
        onPress={handlePressone}
      >
        <List.Item />
        <View>
          <Text style={styles.accordionText}>metronidazole 500 mg orally 2x/day for 7 days OR</Text>
        </View>
        <List.Item />
        <View>
          <Text style={styles.accordionText}>
            metronidazole gel 0.75%, one 5 gm applicator intravaginally, 1x/day
            for 5 days OR
          </Text>
        </View>
        <List.Item />
        <View>
          <Text style={styles.accordionText}>
            clindamycin cream 2%, one 5 gm applicator intravaginally, at bedtime
            for 7 days
          </Text>
        </View>
      </List.Accordion>

      <List.Accordion
        title="ALTERNATIVE REGIMEN" titleNumberOfLines={4}
        left={(props) => <List.Icon {...props} icon={expandedtwo ? 'folder' : 'folder-open'}
        color={expandedtwo ? 'blue' : 'blue'} />}
        onPress={handlePresstwo}
      >
        <List.Item />
        <View>
          <Text style={styles.accordionText}>clindamycin 300 mg orally 2x/day for 7 days OR</Text>
        </View>
        <List.Item />
        <View>
          <Text style={styles.accordionText}>
            clindamycin ovules 100 mg intravaginally at bedtime for 3 days<Text style={{ fontSize: 8}}>1</Text> OR</Text>
              
            
          
        </View>
        <List.Item />
        <View>
          <Text style={styles.accordionText}>
            secnidazole 2 gm orally in a single dose
            <Text style={{ fontSize: 8,  textAlignVertical: 'top'}}>2</Text> OR
          </Text>
        </View>
        <List.Item />
        <View>
          <Text style={styles.accordionText}>tinidazole 2 gm orally 1x/day for 2 days OR</Text>
        </View>
        <List.Item />
        <View>
          <Text style={styles.accordionText}>tinidazole 1 gm orally 1x/day for 5 days</Text>
        </View>
      </List.Accordion>
    </List.Section>
    </ScrollView>
  );
};

export default MyComponent;
