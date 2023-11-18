import * as React from "react";
import {  Text, View,  ScrollView } from "react-native";
import { List } from "react-native-paper";
import styles from "../src/styles";

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
          title="External anogenital warts (see note 12) " titleNumberOfLines={4} 
          left={(props) => <List.Icon {...props} icon={expandedone ? 'folder' : 'folder-open'}
          color={expandedone ? 'blue' : 'blue'}/>}
          onPress={handlePressone}
        >
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>Patient-applied imiquimod 3.75% or 5% cream<Text style={{fontSize: 8, lineHeight: 8, backgroundColor: 'skyblue'}}>13</Text><Text> OR</Text></Text>
          </View>
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>podofilox 0.5% solution or gel OR</Text>
          </View>
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>sinecatechins 15% ointment<Text style={{fontSize: 8, lineHeight: 8, backgroundColor: 'skyblue'}}>13</Text><Text> OR</Text></Text>
          </View>
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>
              Provider–administered cryotherapy with liquid nitrogen or
              cryoprobe OR
            </Text>
          </View>
          <List.Item NumberOfLines={4} />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>
              surgical removal either by tangential scissor excision, tangential
              shave excision, curettage, laser, or electrosurgery OR
            </Text>
          </View>
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>
              trichloroacetic acid (TCA) or bichloroacetic acid (BCA) 80%–90%
              solution
            </Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Urethral meatus warts " titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon={expandedtwo ? 'folder' : 'folder-open'}
          color={expandedtwo ? 'blue' : 'blue'} />}
          onPress={handlePresstwo}
        >
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>cryotherapy with liquid nitrogen OR</Text>
          </View>
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>surgical removal</Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Vaginal warts (see note 14), Cervical warts (see note 15), Intra-anal warts (see note 16) "
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon={expandedthree ? 'folder' : 'folder-open'}
          color={expandedthree ? 'blue' : 'blue'} />}
          onPress={handlePressthree}
        >
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>cryotherapy with liquid nitrogen OR</Text>
          </View>
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>surgical removal OR</Text>
          </View>
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>TCA or BCA 80%–90% solution</Text>
          </View>
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
};

export default MyComponent;
