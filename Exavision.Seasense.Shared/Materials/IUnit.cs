namespace Exavision.Seasense.Shared.Materials {
    public interface IUnit : IMaterial {
        IMaterial GetMaterialById(string materialId);
    }
}
