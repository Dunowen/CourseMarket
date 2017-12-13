using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseMarket.Controllers
{
    public class ResponseContainer<T>
    {
        public ResponseContainer()
        {
            Success = true;
        }
        public bool Success { get; set; }
        public string Message { get; set; }
        public int Count { get; set; }

        private object data;
        public object Data
        {
            get { return data; }
            set
            {
                if (value is IEnumerable<T>)
                    Count = (value as IEnumerable<T>).Count();
                else if (value != null)
                    Count = 1;
                else
                    Count = 0;

                data = value;
            }
        }

        public Exception Exception
        {
            set
            {
                Exception e = value;
                if (Message == null && e != null) //ha van már message, akkor ne írjuk felül
                {
                    Success = false;
                    if (e.InnerException == null)
                        Message = e.Message;
                    else
                        Message = e.InnerException.Message;
                }
            }
        }
    }
}
