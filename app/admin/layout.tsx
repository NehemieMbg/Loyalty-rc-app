import Navbar from './components/Navbar/Navbar';
import '../../sass/_global.scss';

export default function AdmindLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="admin">
        <Navbar />
        <div className="admin-main">{children}</div>
      </div>
    </>
  );
}
