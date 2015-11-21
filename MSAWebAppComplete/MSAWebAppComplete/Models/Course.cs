using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MSAWebAppComplete.Models
{
    public class Course
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]//disable automatic generation of CourseID
        public int CourseID { get; set; }
        public string Title { get; set; }
        public int Credits { get; set; }

        [JsonIgnore]
        public virtual ICollection<Enrollment> Enrollments { get; set; }
    }
}