using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Portal.Smsis.DAL.Interfaces
{
    public interface IBaseRepository<T>
    {
        List<T> GetAllData();

        List<T> FindByColumns(string findString, string[] columns, string table);

        //List<T> FindByColumns(string findString);

        //T FindById(int id);

        //Task<bool> UpdateById(int id, T data);

        //Task<bool> DeleteById(int id);

        //Task<bool> AddNewDataAsync(T data);

        //int GetLastId();
    }
}
