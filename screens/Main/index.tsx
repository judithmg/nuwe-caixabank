import { Image, ScrollView, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PieChart from '../../components/PieChart';
import TransactionsChart from '../../components/TransactionsChart';
import TransactionsCounter from '../../components/TransactionsCounter';
import WeeklyExpensesChart from '../../components/WeeklyExpensesChart';
import { isWeb } from '../../config/global';
import { transactions } from '../../constants/data';
import styles from './styles';

const logo = require('./img/logo.png');

const title = 'Transactions history';
const subtitle = 'These are your monthly and daily actions. ️📊';

const Main: React.FC = () => {
  const { width } = useWindowDimensions();
  const isWebResponsive = width > 500 || !isWeb;

  const renderTitle = (): JSX.Element => (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );

  const renderLogo = (): JSX.Element => (
    <View>
      <Image source={logo} />
    </View>
  );

  const renderWebChart = (): JSX.Element => (
    <View>
      <WeeklyExpensesChart />
    </View>
  );
  return (
    <ScrollView scrollEnabled={!isWebResponsive}>
      <SafeAreaView
        style={[styles.container, isWebResponsive && styles.containerWeb]}>
        <View style={isWeb && styles.webMargin}>
          {!isWeb && (
            <View>
              {renderLogo()}
              {renderTitle()}
            </View>
          )}
          <View>
            <View style={styles.transactionsContainer}>
              {transactions.map((transaction) => (
                <TransactionsCounter
                  key={`counter-${transaction.id}`}
                  {...transaction}
                />
              ))}
            </View>
          </View>
          {isWeb ? <PieChart /> : <TransactionsChart />}
        </View>
        {isWeb && (
          <View style={[styles.webMargin, styles.webContainer]}>
            {renderWebChart()}
          </View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default Main;
