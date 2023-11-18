
import * as React from "react";
import { Text, View,  ScrollView } from "react-native";
import { List } from "react-native-paper";
import styles from "../src/styles";

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
          title="First clinical episode of genital herpes (see note 7)" 
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon={expandedone ? 'folder' : 'folder-open'}
          color={expandedone ? 'blue' : 'blue'}/>}
          onPress={handlePressone}
        >
          <List.Item />
          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
            <Text NumberOfLines={4} style={styles.accordionText}>acyclovir 400 mg orally 3x/day for 7–10 days<Text style={styles.superscript}>8</Text> OR</Text>
          </View>
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>famciclovir 250 mg orally 3x/day for 7–10 days OR</Text>
          </View>
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>valacyclovir 1 gm orally 2x/day for 7–10 days</Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Suppressive therapy for recurrent genital herpes (HSV-2) "
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon={expandedtwo ? 'folder' : 'folder-open'}
          color={expandedtwo ? 'blue' : 'blue'} />}
          onPress={handlePresstwo}
        >
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>acyclovir 400 mg orally 2x/day OR</Text>
          </View>
          <List.Item />
          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
            <Text NumberOfLines={4} style={styles.accordionText}>valacyclovir 500 mg orally 1x/day<Text style={styles.superscript}>9</Text> OR</Text>
          </View>
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>valacyclovir 1 gm orally 1x/day OR</Text>
          </View>
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>famciclovir 250 mg orally 2x/day</Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Episodic therapy for recurrent genital herpes (HSV-2)(see note 10) "
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon={expandedthree ? 'folder' : 'folder-open'}
          color={expandedthree ? 'blue' : 'blue'} />}
          onPress={handlePressthree}
        >
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>acyclovir 800 mg orally 2x/day for 5 days OR</Text>
          </View>
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>acyclovir 800 mg orally 3x/day for 2 days OR</Text>
          </View>
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>famciclovir 1 gm orally 2x/day for 1 day OR</Text>
          </View>
          <List.Item NumberOfLines={4} />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>
              famciclovir 500 mg once, FOLLOWED BY 250 mg 2x/day for 2 days OR
            </Text>
          </View>

          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>famciclovir 125 mg 2x/day for 5 days OR</Text>
          </View>
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>valacyclovir 500 mg orally 2x/day for 3 days OR</Text>
          </View>
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>valacyclovir 1 gm orally 1x/day for 5 days</Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Daily suppressive therapy for persons with HIV infection "
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon={expandedfour ? 'folder' : 'folder-open'}
          color={expandedfour ? 'blue' : 'blue'} />}
          onPress={handlePressfour}
        >
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>acyclovir 400-800 mg orally 2x–3x/day OR</Text>
          </View>
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>famciclovir 500 mg orally 2x/day OR</Text>
          </View>
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>valacyclovir 500 mg orally 2x/day</Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Episodic therapy for persons with HIV infection"
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon={expandedfive ? 'folder' : 'folder-open'}
          color={expandedfive ? 'blue' : 'blue'}/>}
          onPress={handlePressfive}
        >
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>acyclovir 400 mg orally 3x/day for 5–10 days OR</Text>
          </View>
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>famciclovir 500 mg orally 2x/day for 5–10 days OR</Text>
          </View>
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>valacyclovir 1 gm orally 2x/day for 5–10 days</Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Daily suppressive therapy of recurrent genital herpes in pregnant women (see note 11)"
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon={expandedsix ? 'folder' : 'folder-open'}
          color={expandedsix ? 'blue' : 'blue'}/>}
          onPress={handlePresssix}
        >
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>acyclovir 400 mg orally 3x/day OR</Text>
          </View>
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>valacyclovir 500 mg orally 2x/day</Text>
          </View>
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
};

export default MyComponent;
