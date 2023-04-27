import { SidebarData } from './sidebarData';
import { MdAccountBalance,MdLogout,MdAssignmentAdd,MdLogin,MdDataThresholding} from "react-icons/md";

describe('SidebarData', () => {
  it('should have 5 items', () => {
    expect(SidebarData).toHaveLength(5);
  });

  it('should have correct titles', () => {
    expect(SidebarData[0].title).toBe('LogIn');
    expect(SidebarData[1].title).toBe('Home');
    expect(SidebarData[2].title).toBe('Goals');
    expect(SidebarData[3].title).toBe('AddGoal');
    expect(SidebarData[4].title).toBe('LogOut');
  });

  it('should have correct icons', () => {
    expect(SidebarData[0].icon.type).toBe(MdLogin);
    expect(SidebarData[1].icon.type).toBe(MdAccountBalance);
    expect(SidebarData[2].icon.type).toBe(MdAssignmentAdd);
    expect(SidebarData[3].icon.type).toBe(MdLogout);
    expect(SidebarData[4].icon.type).toBe(MdDataThresholding);
  });

  it('should have correct links', () => {
    expect(SidebarData[0].link).toBe('/login');
    expect(SidebarData[1].link).toBe('/home');
    expect(SidebarData[2].link).toBe('/goals');
    expect(SidebarData[3].link).toBe('/addGoal');
    expect(SidebarData[4].link).toBe('/logout');
  });
});
