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
  const [expandedtwelve, setExpandedtwelve] = React.useState(true);
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
  const handlePresstwelve = () => setExpandedtwelve(!expandedtwelve);
  

  return (
    <ScrollView style={styles.scrollView}>
      <List.Section title="Treatment Options">
        <List.Accordion
          title="Adults and adolescents" titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon={expandedone ? 'folder' : 'folder-open'}
          color={expandedone ? 'blue' : 'blue'}/>}
          onPress={handlePressone}
        >
          <List.Section>
            <List.Accordion
              title="Recommended Regimens" titleNumberOfLines={4}
              left={(props) => <List.Icon {...props} icon={expandedtwo ? 'folder' : 'folder-open'}
              color={expandedtwo ? 'blue' : 'blue'} />}
              onPress={handlePresstwo}
            >
              <List.Item />
              <View>
                <Text style={styles.accordionText}>doxycycline 100 mg orally 2x/day for 7 days</Text>
              </View>
            </List.Accordion>
            <List.Accordion
              title="Alternate Regimens" titleNumberOfLines={4}
              left={(props) => <List.Icon {...props} icon={expandedthree ? 'folder' : 'folder-open'}
              color={expandedthree ? 'blue' : 'blue'} />}
              onPress={handlePressthree}
            >
              <List.Item />
              <View>
                <Text style={styles.accordionText}>azithromycin 1 gm orally in a single dose OR</Text>
              </View>
              <List.Item />
              <View>
                <Text style={styles.accordionText}>levofloxacin 500 mg orally 1x/day for 7 days</Text>
              </View>
            </List.Accordion>
          </List.Section>
        </List.Accordion>

        <List.Accordion
          title="Pregnancy" titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon={expandedfour ? 'folder' : 'folder-open'}
          color={expandedfour ? 'blue' : 'blue'} />}
          onPress={handlePressfour}
        >
          <List.Section>
            <List.Accordion
              title="Recommended Regimens" titleNumberOfLines={4}
              left={(props) => <List.Icon {...props} icon={expandedfive ? 'folder' : 'folder-open'}
              color={expandedfive ? 'blue' : 'blue'}/>}
              onPress={handlePressfive}
            >
              <List.Item />
              <View>
                <Text style={styles.accordionText}>azithromycin 1 gm orally in a single dose</Text>
              </View>
            </List.Accordion>
            <List.Accordion
              title="Alternate Regimens" titleNumberOfLines={4}
              left={(props) => <List.Icon {...props} icon={expandedsix ? 'folder' : 'folder-open'}
              color={expandedsix ? 'blue' : 'blue'}/>}
              onPress={handlePresssix}
            >
              <List.Item />
              <View>
                <Text style={styles.accordionText}>amoxicillin 500 mg orally 3x/day for 7 days</Text>
              </View>
            </List.Accordion>
          </List.Section>
        </List.Accordion>
        <List.Accordion
          title="Infant and children <45 kg (see note 4) (nasopharynx, urogenital, and rectal) " 
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon={expandedseven ? 'folder' : 'folder-open'}
          color={expandedseven ? 'blue' : 'blue'}/>}
          onPress={handlePressseven}
        >
          <List.Item title="Recommended Regimens"  titleNumberOfLines={4} /> 
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>
              erythromycin base, 50 mg/kg body weight/day orally, divided into 4
              doses daily for 14 days OR
            </Text>
          </View>
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>
              ethylsuccinate, 50 mg/kg body weight/day orally, divided into 4
              doses daily for 14 days
            </Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Children who weigh ≥45 kg, but who are aged <8 years (nasopharynx, urogenital, and rectal)"
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon={expandedeight ? 'folder' : 'folder-open'}
          color={expandedeight ? 'blue' : 'blue'}/>}
          onPress={handlePresseight}
        >
          <List.Item title="Recommended Regimens" titleNumberOfLines={4}/>
          <View>
            <Text style={styles.accordionText}>azithromycin 1 gm orally in a single dose</Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Children aged ≥8 years (nasopharynx, urogenital, and rectal)"
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon={expandednine ? 'folder' : 'folder-open'}
          color={expandednine ? 'blue' : 'blue'}/>}
          onPress={handlePressnine}
        >
          <List.Item title="Recommended Regimens" titleNumberOfLines={4}/>
          <View>
            <Text style={styles.accordionText}>azithromycin 1 gm orally in a single dose OR</Text>
          </View>
          <List.Item />
          <View>
            <Text style={styles.accordionText}>doxycycline 100 mg orally 2x/day for 7 days</Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Neonates:(see note 5) ophthalmia and pneumonia"
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon={expandedten ? 'folder' : 'folder-open'}
          color={expandedten ? 'blue' : 'blue'}/>}
          onPress={handlePressten}
        >
          <List.Section>
            <List.Accordion
              title="Recommended Regimens" titleNumberOfLines={4}
              left={(props) => <List.Icon {...props} icon={expandedeleven ? 'folder' : 'folder-open'}
              color={expandedeleven ? 'blue' : 'blue'}/>}
              onPress={handlePresseleven}
            >
              <List.Item NumberOfLines={4} />
              <View>
                <Text style={styles.accordionText}>
                  erythromycin base, 50 mg/kg body weight/day orally, divided
                  into 4 doses daily for 14 days OR
                </Text>
              </View>

              <List.Item NumberOfLines={4} />
              <View>
                <Text style={styles.accordionText}>
                  ethylsuccinate, 50 mg/kg body weight/day orally, divided into
                  4 doses daily for 14 days
                </Text>
              </View>
            </List.Accordion>
            <List.Accordion
              title="Alternate Regimens" titleNumberOfLines={4}
              left={(props) => <List.Icon {...props} icon={expandedtwelve ? 'folder' : 'folder-open'}
              color={expandedtwelve ? 'blue' : 'blue'}/>}
              onPress={handlePresstwelve}
            >
              <List.Item NumberOfLines={4} />
              <View>
                <Text style={styles.accordionText}>
                  azithromycin suspension 20 mg/kg body weight/ day orally,
                  1x/day for 3 days
                </Text>
              </View>
            </List.Accordion>
          </List.Section>
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
};

export default MyComponent;
