import * as React from "react";
import {  Text, View, ScrollView } from "react-native"
import { List } from "react-native-paper";
import styles from "../src/styles";

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
  const [expandedthirteen, setExpandedthirteen] = React.useState(true);
  const [expandedfourteen, setExpandedfourteen] = React.useState(true);
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
  const handlePressthirteen = () => setExpandedthirteen(!expandedthirteen);
  const handlePressfourteen = () => setExpandedfourteen(!expandedfourteen);

  return (
    <ScrollView style={styles.scrollView}>
      <List.Section title="Treatment Options">
        <List.Accordion
          title="Uncomplicated infections of the cervix, urethra, and rectum: adults and adolescents <150 kg (see note 6)" 
         
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon={expandedone ? 'folder' : 'folder-open'}
          color={expandedone ? 'blue' : 'blue'}/>}
          onPress={handlePressone}
        >
          <List.Section>
            <List.Accordion
              title="Recommended Regimens"
              left={(props) => <List.Icon {...props} icon={expandedtwo ? 'folder' : 'folder-open'}
              color={expandedtwo ? 'blue' : 'blue'} />}
              onPress={handlePresstwo}
            >
              <List.Item />
              
              <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                <Text style={styles.accordionText}>ceftriaxone 500 mg IM in a single dose<Text style={{fontSize: 8, lineHeight: 8, backgroundColor: 'skyblue'}}> 17</Text></Text>
              </View>
            </List.Accordion>
            <List.Accordion
              title="Alternate Regimens"
              left={(props) => <List.Icon {...props} icon={expandedthree ? 'folder' : 'folder-open'}
              color={expandedthree ? 'blue' : 'blue'} />}
              onPress={handlePressthree}
            >
              <List.Item NumberOfLines={4} />
              <View>
                <Text style={styles.accordionText}>
                  If cephalosporin allergy: gentamicin 240 mg IM in a single
                  dose PLUS azithromycin 2 gm orally in a single dose
                </Text>
              </View>
              <List.Item NumberOfLines={4} />
              <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                <Text style={styles.accordionText}>
                  If ceftriaxone administration is not available or not
                  feasible: cefixime 800 mg orally in a single dose<Text style={{fontSize: 8, lineHeight: 8}}> 17</Text></Text>
                
              </View>
            </List.Accordion>
          </List.Section>
        </List.Accordion>

        <List.Accordion
          title="Uncomplicated infection of the pharynx: adults and adolescents <150 kg (see note 6)"
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon={expandedfour ? 'folder' : 'folder-open'}
          color={expandedfour ? 'blue' : 'blue'} />}
          onPress={handlePressfour}
        >
          <List.Item />
          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
            <Text style={styles.accordionText}>ceftriaxone 500 mg IM in a single dose<Text style={{fontSize: 8, lineHeight: 8}}> 17</Text></Text>
          </View>
        </List.Accordion>

        <List.Accordion
          title="Pregnancy"
          left={(props) => <List.Icon {...props} icon={expandedfive ? 'folder' : 'folder-open'}
          color={expandedfive ? 'blue' : 'blue'}/>}
          onPress={handlePressfive}
        >
          <List.Item />
          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
            <Text style={styles.accordionText}>ceftriaxone 500 mg IM in a single dose<Text style={{fontSize: 8, lineHeight: 8}}> 17</Text></Text>
          </View>
        </List.Accordion>

        <List.Accordion
          title="Conjunctivitis"
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon={expandedsix ? 'folder' : 'folder-open'}
          color={expandedsix ? 'blue' : 'blue'}/>}
          onPress={handlePresssix}
        >
          <List.Item />
          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
            <Text style={styles.accordionText}>ceftriaxone 1 gm IM in a single dose<Text style={{fontSize: 8, lineHeight: 8}}> 18</Text></Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Disseminated gonococcal infections (DGI) (see note 19)"
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon={expandedseven ? 'folder' : 'folder-open'}
          color={expandedseven ? 'blue' : 'blue'}/>}
          onPress={handlePressseven}
        >
          <List.Section>
            <List.Accordion
              title="Recommended Regimens"
              left={(props) => <List.Icon {...props} icon={expandedeight ? 'folder' : 'folder-open'}
              color={expandedeight ? 'blue' : 'blue'}/>}
              onPress={handlePresseight}
            >
              <List.Item NumberOfLines={4} />
              <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                <Text style={styles.accordionText}>ceftriaxone 1 gm IM or by IV every 24 hours<Text style={{fontSize: 8, lineHeight: 8}}> 17</Text> OR</Text>
              </View>
            </List.Accordion>
            <List.Accordion
              title="Alternate Regimens"
              left={(props) => <List.Icon {...props} icon={expandednine ? 'folder' : 'folder-open'}
              color={expandednine ? 'blue' : 'blue'}/>}
              onPress={handlePressnine}
            >
              <List.Item NumberOfLines={4} />
              <View>
                <Text style={styles.accordionText}>cefotaxime 1 gm by IV every 8 hours OR</Text>
              </View>
              <List.Item NumberOfLines={4} />
              <View>
                <Text style={styles.accordionText}>ceftizoxime 1 gm every 8 hours</Text>
              </View>
            </List.Accordion>
          </List.Section>
        </List.Accordion>
        <List.Accordion
          title="Uncomplicated gonococcal vulvovaginitis, cervicitis, urethritis, pharyngitis, or proctitis: children ≤45 kg"
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon={expandedten ? 'folder' : 'folder-open'}
          color={expandedten ? 'blue' : 'blue'}/>}
          onPress={handlePressten}
        >
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>
            ceftriaxone 25–50 mg/kg body weight by IV or IM in a single dose, not to exceed 250 mg IM
            </Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Uncomplicated gonococcal vulvovaginitis, cervicitis, urethritis, pharyngitis, or proctitis: children >45 kg"
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon={expandedten ? 'folder' : 'folder-open'}
          color={expandedten ? 'blue' : 'blue'}/>}
          onPress={handlePressten}
        >
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>
              Treat with the regimen recommended for adults (see above)
            </Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Ocular prophylaxis in neonates"
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon={expandedeleven ? 'folder' : 'folder-open'}
          color={expandedeleven ? 'blue' : 'blue'}/>}
          onPress={handlePresseleven}
        >
          <List.Item />
          <View>
            <Text NumberOfLines={4} style={styles.accordionText}>
              erythromycin (0.5%) ophthalmic ointment in each eye in a single
              application at birth
            </Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Ophthalmia in neonates and infants"
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon={expandedtwelve ? 'folder' : 'folder-open'}
          color={expandedtwelve ? 'blue' : 'blue'}/>}
          onPress={handlePresstwelve}
        >
          <List.Section>
            <List.Accordion
              title="Recommended Regimens"
              left={(props) => <List.Icon {...props} icon={expandedthirteen ? 'folder' : 'folder-open'}
              color={expandedthirteen ? 'blue' : 'blue'}/>}
              onPress={handlePressthirteen}
            >
              <List.Item NumberOfLines={4} />
              <View>
                <Text NumberOfLines={4} style={styles.accordionText}>ceftriaxone 25–50 mg/kg body weight by IV OR</Text>
              </View>
              <List.Item NumberOfLines={4} />
              <View>
                <Text NumberOfLines={4} style={styles.accordionText}>IM in a single dose, not to exceed 250 mg</Text>
              </View>
            </List.Accordion>
            <List.Accordion
              title="Alternate Regimens"
              left={(props) => <List.Icon {...props} icon={expandedfourteen ? 'folder' : 'folder-open'}
              color={expandedfourteen ? 'blue' : 'blue'}/>}
              onPress={handlePressfourteen}
            >
              <List.Item NumberOfLines={4} />
              <View>
                <Text NumberOfLines={4} style={styles.accordionText}>
                  For neonates unable to receive ceftriaxone due to simultaneous
                  administration of intravenous calcium: cefotaxime 100 mg/kg
                  body weight by IV or IM as a single dose
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
