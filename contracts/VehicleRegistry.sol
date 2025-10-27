// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

contract VehicleRegistry {
    struct Vehicle {
        string vehicleId;
        string regNo;
        string year;
        string chassisNo;
        address owner;
        bool isRegistered;
    }

    mapping(string => Vehicle) public vehicles;
    mapping(string => address[]) public ownershipHistory;

    event VehicleRegistered(string vehicleId, address owner);
    event OwnershipTransferred(string vehicleId, address from, address to);

    modifier onlyOwner(string memory vehicleId) {
        require(vehicles[vehicleId].owner == msg.sender, "Not the owner");
        _;
    }

    // ✅ Register new vehicle
    function registerVehicle(
        string memory vehicleId,
        string memory regNo,
        string memory year,
        string memory chassisNo
    ) public {
        require(!vehicles[vehicleId].isRegistered, "Already registered");

        vehicles[vehicleId] = Vehicle({
            vehicleId: vehicleId,
            regNo: regNo,
            year: year,
            chassisNo: chassisNo,
            owner: msg.sender,
            isRegistered: true
        });

        ownershipHistory[vehicleId].push(msg.sender);

        emit VehicleRegistered(vehicleId, msg.sender);
    }

    // ✅ Transfer ownership
    function transferOwnership(string memory vehicleId, address newOwner)
        public
        onlyOwner(vehicleId)
    {
        require(vehicles[vehicleId].isRegistered, "Vehicle not registered");

        address prevOwner = vehicles[vehicleId].owner;
        vehicles[vehicleId].owner = newOwner;

        ownershipHistory[vehicleId].push(newOwner);

        emit OwnershipTransferred(vehicleId, prevOwner, newOwner);
    }

    // ✅ Verify current owner
    function verifyOwnership(string memory vehicleId)
        public
        view
        returns (address)
    {
        require(vehicles[vehicleId].isRegistered, "Vehicle not registered");
        return vehicles[vehicleId].owner;
    }

    // ✅ Get ownership history
    function getOwnershipHistory(string memory vehicleId)
        public
        view
        returns (address[] memory)
    {
        return ownershipHistory[vehicleId];
    }
}
