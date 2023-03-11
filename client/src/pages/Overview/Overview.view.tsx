import { Transaction } from '../../types/Transaction';

import BarChart from './components/BarChart';
import Card from './components/Card';
import Header from '../../components/Header';
import LastTransactions from '../../components/LastTransactions';

import { OverviewStyled } from './Overview.styles';

interface dataCards {
  currentMonth: number;
  lastMonth: number;
  difference: number;
  percent: number;
}

interface OverviewViewProps {
  incomeData: dataCards;
  outcomeData: dataCards;
  transactions: Transaction[];
  incomeTransactions: Transaction[];
}

export function OverviewView(props: OverviewViewProps) {
  const { incomeData, outcomeData, transactions, incomeTransactions } = props;
  console.log(incomeData);
  return (
    <OverviewStyled>
      <Header page="Overview" subtitle="Comece a controlar suas finanças." />

      <section className="container-cards-chart">
        <div className="container-cards">
          <Card
            type="income"
            title="Receitas"
            amount={incomeData.currentMonth}
            difference={incomeData.difference}
            percent={incomeData.percent}
          />
          <Card
            type="outcome"
            title="Despesas"
            amount={outcomeData.currentMonth}
            difference={outcomeData.difference}
            percent={outcomeData.percent}
          />
        </div>
        <BarChart transactions={incomeTransactions} />
      </section>
      <div className="container-transactions">
        <LastTransactions transactions={transactions} />
      </div>
    </OverviewStyled>
  );
}
