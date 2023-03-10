import NavLink from './NavLink';

import { StyledSidebar } from './Sidebar.styles';
import IconOverview from '../../assets/icons/IconOverview';
import Transaction from '../../assets/icons/Transaction';
import IconAnalytics from '../../assets/icons/IconAnalytics';
import Settings from '../../assets/icons/Settings';
import Logout from '../../assets/icons/Logout';
import { useAuthContext } from '../../context/AuthContext';

export function SidebarView() {
  const { handleLogout } = useAuthContext();
  return (
    <StyledSidebar>
      <header className="header">
        <img src="./favicon.svg" alt="favicon" />
      </header>
      <div className="content">
        <nav>
          <NavLink href="/overview" icon={<IconOverview />}>
            Overview
          </NavLink>

          <NavLink href="/transactions" icon={<Transaction />}>
            Transações
          </NavLink>

          <NavLink href="/analytics" icon={<IconAnalytics />}>
            Analytics
          </NavLink>
        </nav>
        <footer>
          {/* <NavLink href="/configuracoes" icon={<Settings />}>
            configuracoes
          </NavLink> */}
          <NavLink icon={<Logout />} onClick={handleLogout}>
            Sair da conta
          </NavLink>
        </footer>
      </div>
    </StyledSidebar>
  );
}
