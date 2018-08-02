using JetBrains.Annotations;

namespace ITechArt.StudentsLab.BusinessLayer.Contracts
{
    public interface IDalSettings
    {
        [NotNull]
        string ConnectionString { get; }
    }
}

