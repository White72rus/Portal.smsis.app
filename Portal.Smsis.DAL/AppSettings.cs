
//  userid=admin;Server=localhost;password=###11001Admin;database=smsis_portal
//  userid=root;Server=localhost;password=Mysql11001@@@;database=smsis_portal

namespace Portal.Smsis.DAL
{
    public static class AppSettings
    {
        public static string ConnectionString { get; private set; } = "userid=root;Server=localhost;password=Mysql11001@@@;database=smsis_portal";
    }
}
