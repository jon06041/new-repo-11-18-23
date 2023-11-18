import * as React from 'react';
import { Text, View, ScrollView  } from 'react-native';
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
        title="RECOMMENDED REGIMEN Over-the-Counter Intravaginal Agents"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon={expandedone ? 'folder' : 'folder-open'}
        color={expandedone ? 'blue' : 'blue'}/>}
        onPress={handlePressone}>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          Clotrimazole 1% cream 5 g intravaginally daily for 7–14 days OR
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          Clotrimazole 2% cream 5 g intravaginally daily for 3 days OR
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          Miconazole 2% cream 5 g intravaginally daily for 7 days OR
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          Miconazole 4% cream 5 g intravaginally for 3 days OR
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          Miconazole 100 mg vaginal suppository, one suppository for 7 days OR
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          Miconazole 200 mg vaginal suppository, one suppository for 3 days OR
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          Miconazole 1,200 mg vaginal suppository, one suppository for 1 day OR
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          Tioconazole 6.5% ointment 5 g intravaginally in a single application
          </Text>
        </View>
      </List.Accordion>

      <List.Accordion
        title="Prescription Intravaginal Agents"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon={expandedtwo ? 'folder' : 'folder-open'}
        color={expandedtwo ? 'blue' : 'blue'} />}
        onPress={handlePresstwo}>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          Butoconazole 2% cream (single dose bioadhesive product), 5 g intravaginally in a single application OR
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          Terconazole 0.4% cream 5 g intravaginally for 7 days OR
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          Terconazole 0.8% cream 5 g intravaginally for 3 days OR
          </Text>
        </View>
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          Terconazole 80 mg vaginal suppository, one suppository daily for 3 days
          </Text>
        </View>
      </List.Accordion>
      <List.Accordion
        title="Oral Agent"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon={expandedthree ? 'folder' : 'folder-open'}
        color={expandedthree ? 'blue' : 'blue'} />}
        onPress={handlePressthree}>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          Fluconazole 150 mg orally in a single dose
          </Text>
        </View>
        
      </List.Accordion>
      
      <Text NumberOfLines={4} style={styles.baseText}>
      {'\n'}{'\n'}
      Short-course topical formulations (i.e., single dose and regimens of 1–3 days) effectively treat uncomplicated VVC. The topically applied azole drugs are more effective than nystatin. Treatment with azoles results in relief of symptoms and negative cultures in 80%–90% of patients who complete therapy.
          </Text>
      <Text style={styles.innerTextred}>The creams and suppositories in this regimen are oil-based and might weaken latex condoms
      and diaphragms.  Patients and providers should refer to condom product labeling for further information. </Text>
      <List.Accordion
        title="Special Considerations"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon={expandedfour ? 'folder' : 'folder-open'}
        color={expandedfour ? 'blue' : 'blue'}/>}
        onPress={handlePressfour}>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          Recurrent Vulvovaginal Candidiasis (RVVC)
          {'\n'}{'\n'}
RVVC, usually defined as three or more episodes of symptomatic VVC in less than 1 year, affects a small percentage of women (less than 5%). C. glabrata and other non-albicans Candida species are observed in 10%–20% of patients with RVVC. Conventional antimycotic therapies are not as effective against these species as against C. albicans.

          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          RVVC Treatment
          {'\n'}{'\n'}
Some specialists recommend a longer duration of initial therapy e.g., 7–14 days of topical therapy or a 100 mg, 150 mg, or 200 mg oral dose of fluconazole every third day
for a total of 3 doses (day 1, 4, and 7) to attempt mycologic remission before initiating a maintenance antifungal regimen.

          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          Maintenance Regimens
          {'\n'}{'\n'}
Oral fluconazole (i.e., 100 mg, 150 mg or 200 mg dose) weekly for 6 months is the first line maintenance regimen. If this regimen is not feasible, topical treatments used
intermittently can also be considered. Suppressive maintenance therapies are effective in reducing RVVC. However, 30%–50% of women will have recurrent disease after
maintenance therapy is discontinued. Symptomatic women who remain culture positive despite maintenance therapy should be managed in consultation with a specialist.

          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          Severe VVC
          {'\n'}{'\n'}
Severe vulvovaginitis (i.e., extensive vulvar erythema, edema, excoriation, and fissure formation) is associated with lower clinical response rates in patients treated with
short courses of topical or oral therapy. Either 7–14 days of topical azole or 150 mg of fluconazole in two sequential doses (second dose 72 hours after initial dose) is
recommended.

          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          Non-albicans VVC
          {'\n'}{'\n'}
Options include longer duration of therapy (7–14 days) with a nonfluconazole azole drug (oral or topical) as first-line therapy. If recurrence occurs, 600 mg of boric acid in a gelatin capsule is recommended, administered vaginally once daily for 3 weeks. If symptoms recur, referral to a specialist is advised.

          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          Pregnancy
          {'\n'}{'\n'}
VVC frequently occurs during pregnancy. Only topical azole therapies, applied for 7 days, are recommended for use among pregnant women.

          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          Compromised Host
          {'\n'}{'\n'}
Treatment for women with HIV infection and uncomplicated or complicated VVC should not differ from that for women who do not have HIV, except where long-term prophylactic therapy with fluconazole (i.e., 200mg weekly) should only be considered for women with HIV and complicated VVC.

          </Text>
        </View>
       
        
      </List.Accordion>
    </List.Section>
    </ScrollView>
  );
};

export default MyComponent;
