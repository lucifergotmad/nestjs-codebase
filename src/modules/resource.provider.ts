import { AccountModule } from "./account/account.module";
import { AppAuthModule } from "./app/app-auth.module";
import { CurrencyModule } from "./currency/currency.module";
import { JournalTemplateModule } from "./journal-template/journal-template.module";
import { JournalModule } from "./journal/journal.module";
import { BalanceSheetsModule } from "./reports/balance-sheets/balance-sheets.module";
import { CashFlowModule } from "./reports/cash-flow/cash-flow.module";
import { JournalReportsModule } from "./reports/journal-reports/journal-reports.module";
import { LedgerModule } from "./reports/ledger/ledger.module";
import { TrialBalanceModule } from "./reports/trial-balance/trial-balance.module";
import { SettingModule } from "./setting/setting.module";
import { SystemModule } from "./system/system.module";
import { UserModule } from "./user/user.module";
import { ProfitLossModule } from "./reports/profit-loss/profit-loss.module";
import { ClosePeriodeModule } from "./close-periode/close-periode.module";
import { TransactionLogModule } from "./transaction-log/transaction-log.module";

const systemProviders = [AppAuthModule, UserModule];

export const resourceProviders = [
  ...systemProviders,
  AccountModule,
  CurrencyModule,
  JournalModule,
  JournalTemplateModule,
  SystemModule,
  JournalReportsModule,
  LedgerModule,
  BalanceSheetsModule,
  TrialBalanceModule,
  CashFlowModule,
  SettingModule,
  ProfitLossModule,
  ClosePeriodeModule,
  TransactionLogModule,
];
